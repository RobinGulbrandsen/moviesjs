var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var movieSchema = mongoose.Schema({
  title: String,
  description: String,
  year: Number,
  genre: String
});

module.exports = mongoose.model('movies', movieSchema);