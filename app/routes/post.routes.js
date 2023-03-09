const router = require('express').Router();
const post = require('../controllers/post.controller');

module.exports = (app) => {
    // Create a new post
    router.post('/', post.create);

    // Retrieve all post
    router.get('/', post.findAll);

	// Retrieve all users and posts
    router.get('/joincomment', post.findPostJoinComment);
	
    // Retrieve a single post with id and all comments
    router.get('/:id/joincomment', post.findOneJoinComment);

    // Update a post with id
    // router.put('/:id', post.update);

    // Delete a post with id
    // router.delete('/:id', post.delete);

    // Delete all post
    // router.delete('/', post.deleteAll);

    app.use('/api/post', router);
};