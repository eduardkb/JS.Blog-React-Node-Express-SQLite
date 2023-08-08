const express = require("express");
const db = require("./app/models");
const fillDB = require("./app/dev/insertDevData");
const cors = require("cors");

const WRITE_DEV_DATA = false;
const PORT = process.env.PORT || 3000;

const app = express();

// Running React FrontEnd with Express
const path = __dirname + '/aFrontend/build';
console.log(`FE Path: ${path}`);
app.use(express.static(path));

//Following lines are to make sure our app can parse the json data
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// CORS Backend access permissions
const corsOptions = {
    origin: "http://www.eduardkb.website",
};
app.use(cors(corsOptions));

// Sync database
if (WRITE_DEV_DATA) {
    db.sequelize.sync({ force: true })
        .then((result) => {
            console.log("=========================");
            console.log("Dropped and re-synced db.");
            console.log("Results Verbose: ", result);
            console.log("=========================");
            initilizeServer();
        })
        .catch((err) => {
            console.log(err);
        });
}
else {
    db.sequelize.sync()
        .then(() => {
            initilizeServer();
        })
        .catch((err) => {
            console.log(err);
        });
}

function initilizeServer() {
    // define root route (WITHOUT LOADING REACT FE WITH EXPRESS)
    // app.get("/", (req, res) => {
    //     res.json({ message: "EKB Blog application Backend." });
    // });

    // Running React FrontEnd with Express (currently running on line 11)
    //app.get('/', function (req, res) {
    //	res.sendFile(path + "index.html");
    //});

    console.log("============================================================");
    console.log("APP SETUP: Adding Routes");
    // include routes in server.js
    require("./app/routes/user.routes")(app);
    require("./app/routes/post.routes")(app);
    require("./app/routes/comment.routes")(app);
    require("./app/routes/category.routes")(app);
    require("./app/routes/tag.routes")(app);

    // add test data to database
    if (WRITE_DEV_DATA) {
        console.log("============================================================");
        console.log("APP SETUP: Adding dev data to database.");
        fillDB.addDevData();
    }

    console.log("============================================================");
    // start server
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}
