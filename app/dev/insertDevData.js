const db = require('../models');
const User = db.User;
const Post = db.Post;

exports.addDevData = () => {
    // Create a user
    const user1 = {
        name: "John Snow",
        email: "jsnow@uta.edu",
        pass: "jsnow1234",
        role: "admin",
    };
    const user2 = {
        name: "Laura Hoton",
        email: "lhorton@uta.edu",
        pass: "lhorton1234",
        role: "user",
    };
    const user3 = {
        name: "Daniel Forts",
        email: "dforts@uta.edu",
        pass: "dforts1234",
        role: "user",
    };

    // Save User in the database
    addUser(user1);
    addUser(user2);
    addUser(user3);

    const post1 = {
        title: "Ti Cloud",
        picture: "Pict_1",
        body: "cloud desc",
        published: false,
        userId: 2,
    }
    const post2 = {
        title: "Dev Node",
        picture: "Pict_2",
        body: "Node desc",
        published: true,
        userId: 2,
    }
    const post3 = {
        title: "Finance iBov",
        picture: "Pict_3",
        body: "ibov desc",
        published: false,
        userId: 3,
    }

    addPost(post1)
    addPost(post2)
    addPost(post3)
};

function addUser(user) {
    User.create(user)
        .then(() => {
            console.log(`DEBUG DEV: Added User ${user.name}`)
        })
        .catch(() => {
            console.log(`DEBUG DEV: problem while adding user ${user.name}`)
        });
}

function addPost(post) {
    Post.create(post)
        .then(() => {
            console.log(`DEBUG DEV: Added Post ${post.title}`)
        })
        .catch(() => {
            console.log(`DEBUG DEV: problem while adding Post ${post.title}`)
        });
}