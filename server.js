const express = require('express')
const db = require('./app/models');
const fillDB = require('./app/dev/insertDevData')

const app = express();
const PORT = 3000;

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

    console.log(`---------------------------`);
    console.log(`Adding Routes`);
    // include routes in server.js
    require('./app/routes/user.routes')(app);
    require('./app/routes/post.routes')(app);
    require('./app/routes/comment.routes')(app);

    // add test data to database
    // console.log(`Adding dev data to database.`);
    // fillDB.addDevData();

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

