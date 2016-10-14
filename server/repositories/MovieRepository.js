var Movie = require('../models/MovieModel');

module.exports = {

  create: function (movie) {
    return new Movie(movie).save();
  },

  read: function (id) {
    return Movie.find({_id: id}).exec();
  },

  readAll: function () {
    return Movie.find({}).exec();
  },

  update: function (movie) {
    return Movie.update({_id: movie.id}, movie).exec();
  },

  destroy: function (id) {
    return Movie.find({_id: id}).remove().exec();
  }

};