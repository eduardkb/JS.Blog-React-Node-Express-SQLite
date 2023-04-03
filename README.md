# JS Blog - Frontend

### start and run project

    $ npm install
    $ npm run dev

### Components tree

    - App		
		- MainApp
			- Admin (To-Do)
			- MainPostsPage
				- Header
					- Filter
				- Main	
					- PostPannel  (main pannel with all posts)
						- Post
					- PostDetails (changes main pannel to details of clicked post)
				- Footer

### Initial setup

    npx create-react-app blog-backend
    npm install @mui/material @mui/lab @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material @material-ui/core
	npm install date-fns
	npm install axios

#### =========================================================================================

# JS Blog - BACKEND

### start and run project

    $ npm install
    $ npm run dev

### APIs

    - /api/user
    	GET: /         		(get all users)
    	GET: /joinpost 		(get all users joined with posts)
    	POST: /        		(add a new user)

    - /api/post
    	GET: /  		(get all posts)
    	GET: /joincomment 	(get all posts joined with their comments)
    	GET: /joincomment/:id	(get post with id[x] and all its comments)
		GET: /joinTag/:id	(get post with id[x] and all its tags)
    	POST: / 		(add a new post)

    - /api/comment
    	GET: /  		(get all comments)
    	POST: / 		(add a new comment)

    - /api/category
    	GET: /  		(get all category)
    	GET: /joinpost		(get all categories joined with their posts)
    	POST: / 		(add a new category)

    - /api/tag
    	GET: /  		(get all tags)
		GET: /joinPost/:id	(get tag with id[x] and all its posts)
    	POST: / 		(add a new tag)

### SQLite tables

    User:
    	PK: id
    	FIELDS: name, email, pass, role, timestamploggedin

    	1- User 1->M Post
    	2- User 1->M Comment
    Post:
    	PK: id
    	FIELDS: title, picture, body, published, upvote
    	FK: userId, categoryId

    	3- Post 1->M Comment
    Comment:
    	PK: id
    	FIELDS: comment, published
    	FK: userId, postId
    Category:
    	PK: id
    	FIELDS: name, description, active

    	4- Category 1->M Post
    Tag:
    	PK: id
    	FIELDS: name

    	5- Tag M->N Post

### Initialize Project from zero

    $ npm i express dotenv sequelize sequelize-cli
    $ npm i sqlite3
	$ npm i cors
    $ npm install --save-dev nodemon
    On file package.js add script
    	"dev": "nodemon index.js"
    create sequelize files:
    	$ ./node_modules/.bin/sequelize init

    eslint
    	$ npm install eslint
    	$ eslint --init
    	on config.json
    		{
    			"editor.formatOnSave": true,
    			"editor.codeActionsOnSave": {
    				"source.fixAll.eslint": true
    			},
    			"eslint.validate": ["javascript"]
    		}
