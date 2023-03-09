const router = require('express').Router();
const comment = require('../controllers/comment.controller');

module.exports = (app) => {
    // Create a new user
    router.post('/', comment.create);

    // Retrieve all user
    router.get('/', comment.findAll);

    // Retrieve a single user with id
    // router.get('/:id', user.findOne);

    // Update a user with id
    // router.put('/:id', user.update);

    // Delete a user with id
    // router.delete('/:id', user.delete);

    // Delete all user
    // router.delete('/', user.deleteAll);

    app.use('/api/comment', router);
};