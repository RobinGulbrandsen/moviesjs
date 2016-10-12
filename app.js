var express = require('express');
var bodyParser = require('body-parser');
var MovieController = require('./controllers/MovieController');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/movies',     MovieController.create);
app.get('/movies',      MovieController.readAll);
app.get('/movies/:id',  MovieController.read);

console.log('server is listening on port 3000');
app.listen(3000);