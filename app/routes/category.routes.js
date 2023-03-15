const router = require("express").Router();
const category = require("../controllers/category.controller");

module.exports = (app) => {
	// Create a new category
	router.post("/", category.create);

	// Retrieve all category
	router.get("/", category.findAll);

	// Retrieve all categories and posts
	router.get("/joinpost", category.findCategoryJoinPost);

	// Retrieve a single category with id
	// router.get('/:id', category.findOne);

	// Update a category with id
	// router.put('/:id', category.update);

	// Delete a category with id
	// router.delete('/:id', category.delete);

	// Delete all category
	// router.delete('/', category.deleteAll);

	app.use("/api/category", router);
};