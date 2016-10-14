var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var MovieController = require('./controllers/MovieController');

console.log('connecting to mongodb at ', process.env.mongodb);
mongoose.connect(process.env.mongodb + 'movies');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//============== MOVIES ==================
app.post('/movies',       MovieController.create);
app.get('/movies',        MovieController.readAll);
app.get('/movies/:id',    MovieController.read);
app.put('/movies',        MovieController.update);
app.delete('/movies/:id', MovieController.destroy);

console.log('server is listening on port 3000');
app.listen(3000);