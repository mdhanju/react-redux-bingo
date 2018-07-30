const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser')
const initialController = require('./server/controllers/initialSetup');

app.use(
	session({
		secret: 'keyboard cat',
		cookie: {
			maxAge: 3600000
		},
		resave: false,
		saveUninitialized: true
	})
);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '.build')));
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
	next();
});

app.get('/', (req, res) => {
	console.log(" __dirname + '/.build/index.html' ", __dirname + '.build/index.html');
	res.sendFile(__dirname + '/.build/index.html');
});

app.get('/api/app', initialController.getInitialNumbers);
app.get('/api/app/ball', initialController.getNewBall);
app.post('/api/app/verify', initialController.verfiyBingo);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
