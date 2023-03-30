const db = require("../models");
const User = db.User;
const Post = db.Post;
const Comment = db.Comment;
const Category = db.Category;
const Tag = db.Tag;
const data = require("./data.json");

exports.addDevData = () => {
	for (let i = 0; i < data.user.length; i++) {
		addUser(data.user[i]);
	}
	for (let i = 0; i < data.category.length; i++) {
		addCateg(data.category[i]);
	}
	for (let i = 0; i < data.post.length; i++) {
		addPost(data.post[i]);
	}
	for (let i = 0; i < data.comment.length; i++) {
		addComm(data.comment[i]);
	}
	for (let i = 0; i < data.tag.length; i++) {
		addTag(data.tag[i]);
	}
	for (let i = 0; i < data.tag_post.length; i++) {
		addPost_Tags(data.tag_post[i].tag, data.tag_post[i].post);
	}
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

function addPost_Tags(idTag, idPost) {

	Tag.findOne({ where: { id: idTag } })
		.then(function (resTag) {
			Post.findOne({ where: { id: idPost } })
				.then(function (resPost) {
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

