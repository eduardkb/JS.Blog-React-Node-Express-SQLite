module.exports = (sequelize, DataTypes) => {
	const Tag = sequelize.define("Tag", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
		{ timestamps: false }
	);
	Tag.associate = (models) => {
		Tag.belongsToMany(models.Post, { through: "Post_Tags" });
	};

	return Tag;
};