const db = require('../models');

const User = db.User;

const { Op } = db.Sequelize;

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }

    // Create a user
    const user = {
        name: req.body.name,
        email: req.body.email,
        pass: req.body.pass,
        role: req.body.role,
    };

    // Save User in the database
    User.create(user)
        .then((data) => {
            console.log(`DEBUG MSG: Add user |${user}|${user.name}|`)
            res.send(data);
        })
        .catch((err) => {
            console.log(`DEBUG ERR MSG: Add user |${user}|${user.name}|`)
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating a user.',
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const { title } = req.query;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    User.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving users.',
            });
        });
};

exports.findUserJoinPost = (req, res) => {
    User.findAll({ include: [db.Post] })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving users and posts.',
            });
        });
}


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
