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
    });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: 'userId'
        })
    }

    return Post;
};