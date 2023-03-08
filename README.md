# JS Blog

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
	Post:
		PK: id
		FIELDS: title, picture, body, published
		FK: userId, categoryId
	Comment:
		PK: id
		FIELDS: comment, upvote, published
		FK: userId, postId
	Category:
		PK: id
		FIELDS: name, description, active
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
