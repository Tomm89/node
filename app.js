// app.js
var express = require('express');
var app = express();
var db = require('./db'); //ADD THIS LINE

// ADD THESE TWO LINES
var UserController = require('./Users/UserController');
app.use('/Users', UserController);

var FeedController = require('./Feeds/FeedController');
app.use('/Feeds', FeedController);

module.exports = app;

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
