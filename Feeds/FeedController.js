// FeedController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Feed = require('./Feed');

// ADD THIS PART
// CREATES A NEW FeedController
router.post('/', function (req, res) {
    Feed.create({
            author: req.body.author,
            title: req.body.title,
            subtitle: req.body.subtitle,
            date: req.body.date,
            image: req.body.image
        },
        function (err, feed) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(feed);
        });
});

// RETURNS ALL THE FEEDS IN THE DATABASE
router.get('/', function (req, res) {
    Feed.find({}, function (err, feeds) {
        if (err) return res.status(500).send("There was a problem finding the feeds.");
        res.status(200).send(feeds);
    });
});

module.exports = router;
