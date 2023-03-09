# JS Blog

### TO-DO

    BACKEND:
    	- create Tags table (M:N association)
    		https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/
    		https://www.bezkoder.com/sequelize-associate-many-to-many/

    	- add timestamps=false to tables that do not require it (category and tags)
    		const Profile = sequelize.define('profile', {
    		  name: DataTypes.STRING
    		}, { timestamps: false });

### start and run project

    $ npm install
    $ npm run dev

### APIs

    - /api/user
    	GET: /         	(get all users)
    	GET: /joinpost 	(get all users joined with posts)
    	POST: /        	(add a new user)

    - /api/post
    	GET: /  		(get all posts)
    	GET: /joincomment 	(get all posts joined with their comments)
    	GET: /:id/joincomment	(get post with id[x] and all its comments)
    	POST: / 		(add a new post)

    - /api/comment
    	GET: /  		(get all comments)
    	POST: / 		(add a new comment)

    - /api/category
    	GET: /  		(get all category)
    	GET: /joinpost		(get all categories joined with their posts)
    	POST: / 		(add a new category)

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
