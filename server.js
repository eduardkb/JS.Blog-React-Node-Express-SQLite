const express = require('express')
const db = require('./app/models');
const fillDB = require('./app/dev/insertDevData')

const WRITE_DEV_DATA = false;
const PORT = 8080;

const app = express();
//Following lines are to make sure our app can parse the json data
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

function initilizeServer() {
    // define root route
    app.get('/', (req, res) => {
        res.json({ message: 'EKB Blog application Backend.' });
    });

    console.log(`============================================================`);
    console.log(`APP SETUP: Adding Routes`);
    // include routes in server.js
    require('./app/routes/user.routes')(app);
    require('./app/routes/post.routes')(app);
    require('./app/routes/comment.routes')(app);
    require('./app/routes/category.routes')(app);
    require('./app/routes/tag.routes')(app);

    // add test data to database
    if (WRITE_DEV_DATA){
        console.log(`============================================================`);
        console.log(`APP SETUP: Adding dev data to database.`);
        fillDB.addDevData();
    }
    
    console.log(`============================================================`);
    // start server
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
}

// Sync database
db.sequelize.sync()
    .then((result) => {
        initilizeServer();
    })
    .catch((err) => {
        console.log(err);
    })

