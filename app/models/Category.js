module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define("Category", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		}
	},
		{ timestamps: false }
	);

	Category.associate = models => {
		Category.hasMany(models.Post, {
			foreignKey: "categoryId"
		});
	};

	return Category;
};