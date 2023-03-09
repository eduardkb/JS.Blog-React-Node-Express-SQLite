const db = require('../models');
const User = db.User;
const Post = db.Post;
const Comment = db.Comment;
const Category = db.Category;

const data = {
		"user":[
			{
				name: "John Snow",
				email: "jsnow@uta.edu",
				pass: "jsnow1234",
				role: "admin",
			},
			{
				name: "Laura Hoton",
				email: "lhorton@uta.edu",
				pass: "lhorton1234",
				role: "user",
			},
			{
				name: "Daniel Forts",
				email: "dforts@uta.edu",
				pass: "dforts1234",
				role: "user",
			}
		],		
		"category":[
			{
				name:"Inform.Tech",
				description:"IT Stuff",
				active:true,
			},
			{
				name:"Programming",
				description:"Interesting Programming",
				active:false,
			}
		],
		"post":[
			{
				title: "Ti Cloud",
				picture: "Pict_1",
				body: "cloud desc",
				published: false,
				userId: 2,
				categoryId: 1,
			},
			{
				title: "Dev Node",
				picture: "Pict_2",
				body: "Node desc",
				published: true,
				userId: 2,
				categoryId: 2,
			},
			{
				title: "Finance iBov",
				picture: "Pict_3",
				body: "ibov desc",
				published: false,
				userId: 3,
				categoryId: 2,
			}
		],		
		"comment":[
			{
				comment: "comment 1 test",
				upvote: 2,
				published: false,
				userId: 3,
				postId: 3,
			},
			{
				comment: "comment 2 test",
				upvote: 3,
				published: true,
				userId: 3,
				postId: 2,
			}
		],
		
	}

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