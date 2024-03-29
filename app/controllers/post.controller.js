const db = require("../models");

const Post = db.Post;

const { Op } = db.Sequelize;

// Create and Save a new post
exports.create = (req, res) => {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	// Create a post
	const post = {
		title: req.body.title,
		picture: req.body.picture,
		body: req.body.body,
		published: req.body.published ? req.body.published : false,
		upvote: req.body.upvote,
		categoryId: req.body.categoryId,
		userId: req.body.userId,
		createdAt: req.body.createdAt,
	};

	console.log("".padEnd("40", "*"))
	console.log("DEB: req.body.title: ", req.body.title)
	console.log("DEB: req.body.CatID: ", req.body.categoryId)
	console.log("DEB: post: ", post)
	console.log("DEB: post.categoryId: ", post.categoryId)
	console.log("".padEnd("40", "*"))

	// Save post in the database
	Post.create(post)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating a post.",
			});
		});
};

// Retrieve all post from the database.
exports.findAll = (req, res) => {
	const { title } = req.query;
	const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

	Post.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving posts.",
			});
		});
};

exports.findPostJoinComment = (req, res) => {
	Post.findAll({ include: [db.Comment] })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving posts and comments.",
			});
		});
};

exports.findPostJoinTag = (req, res) => {
	Post.findAll({ include: [db.Tag] })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving posts and tags.",
			});
		});
};

// Find a single post with id and all comments
exports.findOneJoinComment = (req, res) => {
	const { id } = req.params;

	Post.findByPk(id, { include: [db.Comment] })
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find post with id=${id}.`,
				});
			}
		})
		.catch(() => {
			res.status(500).send({
				message: `Error retrieving post with id=${id}`,
			});
		});
};


exports.findOnePostJoinComment = (req, res) => {
	const { id } = req.params;

	Post.findByPk(id, { include: [db.Tag] })
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find post with id=${id}.`,
				});
			}
		})
		.catch(() => {
			res.status(500).send({
				message: `Error retrieving post with id=${id}`,
			});
		});
};


exports.findOneJoinAllDetails = (req, res) => {
	const { id } = req.params;

	// EAGER LOADING - inlude one post and ALL its dependencies
	Post.findByPk(id, { include: { all: true, nested: true } })
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find post with id=${id}.`,
				});
			}
		})
		.catch(() => {
			res.status(500).send({
				message: `Error retrieving post with id=${id}`,
			});
		});
};

exports.upvotePost = (req, res) => {
	const { id } = req.params;

	Post.findByPk(id)
		.then((data) => {
			const newUpvoteData = { upvote: data.upvote + 1 };
			Post.update(newUpvoteData, {
				where: { id },
			})
				.then((num) => {
					if (num == 1) {
						res.send({
							newData: newUpvoteData,
							message: "Post Upvoted.",
							success: true,
						});
					}
					else {
						res.send({
							newData: {},
							message: "Error while upvoting post.",
							success: false,
						});
					}
				})
				.catch(() => {
					res.status(500).send({
						newData: {},
						message: "Unable to update post right now.",
						success: false,
					});
				});
		})
		.catch(() => {
			res.status(500).send({
				newData: {},
				message: "Unable to update post right now.",
				success: false,
			});
		});
};

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
