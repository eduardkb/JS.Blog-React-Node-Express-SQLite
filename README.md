# JS Blog

### TO-DO
	BACKEND:
		- fix not inserting comment
		- add timestamps=false to tables that do not require it
			const Profile = sequelize.define('profile', {
			  name: DataTypes.STRING
			}, { timestamps: false });
			
		- post has many comments (JOIN)
			create post/joincomments
		- user has many comments (JOIN)
			create user/joincomments		

		- create table category
		- create FK categoryid
			category has many post
			post belongs to category
			post has fk (fk categoryid)
		- category has many posts (JOIN)
			create category/joinposts
			
		- create Tags table (M:N association)
			https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/
			https://www.bezkoder.com/sequelize-associate-many-to-many/

### start and run project
	$ npm install
	$ npm run dev

### API's
	- /api/user
		GET: /         (get all users)
		GET: /joinpost (get all users joined with posts)
		POST: /        (add a new user)

	- /api/post
		GET: /  (get all posts)
		POST: / (add a new post)

### SQLite tables
	User:
		PK: id
		FIELDS: name, email, pass, role, timestamploggedin

		1- User 1->M Post
		2- User 1->M Comment
	Post:
		PK: id
		FIELDS: title, picture, body, published
		FK: userId, categoryId		

		3- Post 1->M Comment
	Comment:
		PK: id
		FIELDS: comment, upvote, published
		FK: userId, postId
	Category:
		PK: id
		FIELDS: name, description, active

		4- Category 1->M Post
	Tag:
		PK: id
		FIELDS: name

### Initialize Project from zero
	$ npm i express dotenv sequelize sequelize-cli
	$ npm i sqlite3
	$ npm install --save-dev nodemon
	On file package.js add script
		"dev": "nodemon index.js"
	create sequelize files:
		$ ./node_modules/.bin/sequelize init
