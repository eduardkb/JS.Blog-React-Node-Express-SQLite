const db = require("../models");
const User = db.User;
const Post = db.Post;
const Comment = db.Comment;
const Category = db.Category;
const Tag = db.Tag;
const data = require("./data.json");

exports.addDevData = () => {
	addUser(data.user[0]);
	addUser(data.user[1]);
	addUser(data.user[2]);

	addCateg(data.category[0]);
	addCateg(data.category[1]);
	
	addPost(data.post[0]);
	addPost(data.post[1]);
	addPost(data.post[2]);
	
	addComm(data.comment[0]);
	addComm(data.comment[1]);
	
	addTag(data.tag[0]);
	addTag(data.tag[1]);
	addTag(data.tag[2]);

	addPost_Tags(1, 2);
	addPost_Tags(2, 2);
};

function addUser(user) {
	User.create(user)
		.then(() => {
			console.log(`DEBUG DEV: Added User ${user.name}`);
		})
		.catch(() => {
			console.log(`DEBUG DEV: problem while adding user ${user.name}`);
		});
}

function addPost(post) {
	Post.create(post)
		.then(() => {
			console.log(`DEBUG DEV: Added Post ${post.title}`);
		})
		.catch(() => {
			console.log(`DEBUG DEV: problem while adding Post ${post.title}`);
		});
}

function addComm(comment) {
	Comment.create(comment)
		.then(() => {
			console.log(`DEBUG DEV: Added comment ${comment.comment}`);
		})
		.catch(() => {
			console.log(`DEBUG DEV: problem while adding comment ${comment.comment}`);
		});
}

function addCateg(categ) {
	Category.create(categ)
		.then(() => {
			console.log(`DEBUG DEV: Added category ${categ.name}`);
		})
		.catch(() => {
			console.log(`DEBUG DEV: problem while adding category ${categ.name}`);
		});
}

function addTag(tag) {
	Tag.create(tag)
		.then(() => {
			console.log(`DEBUG DEV: Added tag ${tag.name}`);
		})
		.catch(() => {
			console.log(`DEBUG DEV: problem while adding tag ${tag.name}`);
		});
}

function addPost_Tags(idTag, idPost){

	Tag.findOne({ where: { id: idTag } })
		.then(function(resTag){
			Post.findOne({ where: { id: idPost } })
				.then(function (resPost){
					resTag.addPost(resPost);
					console.log(`DEBUG DEV: Added relation between tag ${idTag} post ${idPost}`);
				})
				.catch(() => {
					console.log(`DEBUG DEV: Problem adding relation between tag ${idTag} post ${idPost}`);
				});
		})
		.catch(() => {
			console.log(`DEBUG DEV: Problem adding relation between tag ${idTag} post ${idPost}`);
		});
}

