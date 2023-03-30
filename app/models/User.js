module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		pass: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		timestamploggedin: {
			type: DataTypes.DATE,
		},
	});

	User.associate = models => {
		User.hasMany(models.Post, {
			foreignKey: "userId"
		});
		User.hasMany(models.Comment, {
			foreignKey: "userId"
		});
	};

	return User;
};