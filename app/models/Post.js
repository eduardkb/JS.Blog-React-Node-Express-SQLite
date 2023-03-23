module.exports = (sequelize, DataTypes) => {
	const Post = sequelize.define("Post", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		picture: {
			type: DataTypes.TEXT,
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		published: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		upvote: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});

	Post.associate = (models) => {
		Post.belongsTo(models.User, {
			foreignKey: "userId"
		});
		Post.hasMany(models.Comment, {
			foreignKey: "postId"
		});
		Post.belongsTo(models.Category, {
			foreignKey: "categoryId"
		});
		Post.belongsToMany(models.Tag, { through: "Post_Tags" });
	};

	return Post;
};