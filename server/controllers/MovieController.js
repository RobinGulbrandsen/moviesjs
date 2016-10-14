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

    MovieRepository.create(movie).then(function(movie) {
      res.status(200).send(movie);
    }).catch(function(error) {
      console.log(error);
      res.status(500).send('You broke it!');
    });
  },

  read: function (req, res) {
    if (req.params.id === undefined) {
      res.status(400).send('Url Param for Id must be defined');
    }

    MovieRepository.read(req.params.id).then(function(movie) {
      res.status(200).send(movie);
    }).catch(function(error) {
      console.log(error);
      res.status(500).send('You broke it!');
    });
  },

  readAll: function (req, res) {
    MovieRepository.readAll().then(function(movies) {
      console.log(movies);
      res.status(200).send(movies);
    }).catch(function(error) {
      console.log(error);
      res.status(500).send('You broke it!');
    });
  },

  update: function (req, res) {
    MovieRepository.read(req.param.id).then(function(movie) {
      if (!movie) {
        res.status(404).send('cant update an non exsistant object');
        return;
      }

      MovieRepository.update(req.body).then(function(updated) {
        res.status(200).send(updated);
      });
    }).catch(function(error) {
      console.log(error);
      res.status(500).send('You broke it!');
    });
  },

  destroy: function (req, res) {
    MovieRepository.destroy(req.params.id).then(function(updated) {
      res.status(200).send();
    }).catch(function(error) {
      console.log(error);
      res.status(500).send('You broke it!');
    });
  }
};