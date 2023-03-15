const db = require("../models");

const Category = db.Category;

const { Op } = db.Sequelize;

// Create and Save a new Category
exports.create = (req, res) => {
	// Validate request
	if (!req.body.name) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	// Create a Category
	const category = {
		name: req.body.name,
		description: req.body.description,
		active: req.body.active ? req.body.active : false,
	};

	// Save Category in the database
	Category.create(category)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
                    err.message || `Error while creating a Category. |${Category.name}`,
			});
		});
};

// Retrieve all Category from the database.
exports.findAll = (req, res) => {
	const { title } = req.query;
	const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	Category.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
                    err.message || "Some error occurred while retrieving Categorys.",
			});
		});
};

exports.findCategoryJoinPost = (req, res) => {
	Category.findAll({ include: [db.Post] })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
                    err.message || "Some error occurred while retrieving categories and posts.",
			});
		});
};

// Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const { id } = req.params;

//   Tutorial.findByPk(id)
//     .then((data) => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Tutorial with id=${id}.`,
//         });
//       }
//     })
//     .catch(() => {
//       res.status(500).send({
//         message: `Error retrieving Tutorial with id=${id}`,
//       });
//     });
// };

// Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   const { id } = req.params;

//   Tutorial.update(req.body, {
//     where: { id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Tutorial was updated successfully.',
//         });
//       } else {
//         res.send({
//           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
//         });
//       }
//     })
//     .catch(() => {
//       res.status(500).send({
//         message: `Error updating Tutorial with id=${id}`,
//       });
//     });
// };

// Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   const { id } = req.params;

//   Tutorial.destroy({
//     where: { id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: 'Tutorial was deleted successfully!',
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
//         });
//       }
//     })
//     .catch(() => {
//       res.status(500).send({
//         message: `Could not delete Tutorial with id=${id}`,
//       });
//     });
// };

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Tutorial.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//             err.message || 'Some error occurred while removing all tutorials.',
//       });
//     });
// };

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Tutorial.findAll({ where: { published: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//             err.message || 'Some error occurred while retrieving tutorials.',
//       });
//     });
// };
