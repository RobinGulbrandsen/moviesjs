var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var movieSchema = mongoose.Schema({
  title: String,
  description: String,
  year: Number,
  genre: String
});

movieSchema.options.toJSON = {
  transform: function(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
};

module.exports = mongoose.model('movies', movieSchema);