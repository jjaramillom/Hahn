var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const keys = require('./config/keys');

var indexRouter = require('./routes/index');

mongoose.connect(keys.mongoURI, (err) => {
	if (err) {
		return console.log('Error connecting with mongo');
	}
	console.log('Connected to mongo');
});

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
