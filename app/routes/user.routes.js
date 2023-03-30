const router = require("express").Router();
const user = require("../controllers/user.controller");

module.exports = (app) => {
	// Create a new user
	router.post("/", user.create);

	// Retrieve all user
	router.get("/", user.findAll);

	// Retrieve all users and posts
	router.get("/joinpost", user.findUserJoinPost);

	// Retrieve a single user with id
	// router.get('/:id', user.findOne);

	// Update a user with id
	// router.put('/:id', user.update);

	// Delete a user with id
	// router.delete('/:id', user.delete);

	// Delete all user
	// router.delete('/', user.deleteAll);

	app.use("/api/user", router);
};