var MovieRepository = require('../repositories/MovieRepository');

module.exports = {
  create: function (req, res) {
    var movie = req.body;
    // validation
    if (movie.title === undefined ||
        movie.title.trim().length === 0) {
      res.status(400).send('Movietitle has to be defined');
      return;
    }

    MovieRepository.create(movie, function(movie) {
      console.log('create', movie);
      res.status(200).send(movie.ops[0]);
    })
  },

  read: function (req, res) {
    if (req.params.id === undefined) {
      res.status(400).send('Url Param for Id must be defined');
    }

    MovieRepository.read(req.params.id, function(movie) {
      res.status(200).send();
    });
  },

  readAll: function (req, res) {
    MovieRepository.readAll(function(movies) {
      res.status(200).send(movies);
    });
  },

  update: function (req, res) {
    console.log('update');

    res.status(200).send();
  },

  destroy: function (req, res) {
    console.log('destroy');

    res.status(200).send();
  }
}