const db = require('../models');
const User = db.User;
const Post = db.Post;
const Comment = db.Comment;
const Category = db.Category;
const data = require('./data')

exports.addDevData = () => {
	console.log("DEBUG DEV1: Data to add: ", data.user[0].name);
	
	addUser(data.user[0]);
    addUser(data.user[1]);
    addUser(data.user[2]);

	addCateg(data.category[0])
	addCateg(data.category[1])
	
	addPost(data.post[0])
    addPost(data.post[1])
    addPost(data.post[2])
	
    addComm(data.comment[0])
    addComm(data.comment[1])
	
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

function addComm(comment) {
    Comment.create(comment)
        .then(() => {
            console.log(`DEBUG DEV: Added comment ${comment.comment}`)
        })
        .catch(() => {
            console.log(`DEBUG DEV: problem while adding comment ${comment.comment}`)
        });
}

function addCateg(categ) {
	console.log("DEBUG DEV3: Data: ", categ.name);
    Category.create(categ)
        .then(() => {
            console.log(`DEBUG DEV: Added category ${categ.name}`)
        })
        .catch(() => {
            console.log(`DEBUG DEV: problem while adding category ${categ.name}`)
        });
}