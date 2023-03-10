const router = require('express').Router();
const tag = require('../controllers/tag.controller');

module.exports = (app) => {
    // Create a new tag
    router.post('/', tag.create);

    // Retrieve all tag
    router.get('/', tag.findAll);

    // Retrieve a single tag with id and all posts
    router.get('/joinPost/:id', tag.findOneTagJoinPost);

    // Retrieve a single tag with id
    // router.get('/:id', tag.findOne);

    // Update a tag with id
    // router.put('/:id', tag.update);

    // Delete a tag with id
    // router.delete('/:id', tag.delete);

    // Delete all tag
    // router.delete('/', tag.deleteAll);

    app.use('/api/tag', router);
};