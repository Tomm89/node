var mongoose = require('mongoose');
var FeedSchema = new mongoose.Schema({
  author: String,
  title: String,
  subtitle: String,
  date: String,
  image: String
});
mongoose.model('Feed', FeedSchema);
module.exports = mongoose.model('Feed');
