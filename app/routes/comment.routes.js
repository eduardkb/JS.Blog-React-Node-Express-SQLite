const router = require("express").Router();
const comment = require("../controllers/comment.controller");

module.exports = (app) => {
	// Create a new comment
	router.post("/", comment.create);

	// Retrieve all comment
	router.get("/", comment.findAll);

	// Retrieve comments by post id joining User
	router.get("/byPostJoinUser/:id", comment.findCommentByPostJoinUser);

	// Retrieve a single comment with id
	// router.get('/:id', comment.findOne);

	// Update a comment with id
	// router.put('/:id', comment.update);

	// Delete a comment with id
	// router.delete('/:id', comment.delete);

	// Delete all comment
	// router.delete('/', comment.deleteAll);

	app.use("/api/comment", router);
};