module.exports = {

  create: function (movie, successCallback) {

    MongoClient.connect(this._url, function(err, db) {
      var collection = db.collection('movies');
  
      collection.insert(movie, function(err, result) {
        if (err) {
          console.log(err);
          db.close();
        }

        successCallback(result);
        db.close();
      });

    });
  },

  read: function (id, successCallback) {
    MongoClient.connect(this._url, function(err, db) {
      var collection = db.collection('movies');

      collection.find({_id: id}).toArray(function(err, movies) {
        if (err) {
          console.log(err);
          db.close();
        }

        successCallback(movies);
        db.close();
      });

    });
  },

  readAll: function (successCallback) {
    MongoClient.connect(this._url, function(err, db) {
      var collection = db.collection('movies');

      collection.find({}).toArray(function(err, movies) {
        if (err) {
          console.log(err);
          db.close();
        }

        successCallback(movies);
        db.close();
      });

    });
  },

  update: function (id, movie) {

  },

  destroy: function (id) {

  }
}