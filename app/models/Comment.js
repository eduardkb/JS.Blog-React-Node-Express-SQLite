module.exports = (sequelize, DataTypes) => {
	const Comment = sequelize.define("Comment", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		published: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	});

	Comment.associate = (models) => {
		Comment.belongsTo(models.Post, {
			foreignKey: "postId"
		});
		Comment.belongsTo(models.User, {
			foreignKey: "userId"
		});
	};

	return Comment;
};
