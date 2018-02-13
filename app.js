var express = require('express');
var app = express();
var path    = require("path");
var bodyParser = require('body-parser');

app.use('/dist', express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var logger = require(__dirname+'/src/server/logger.js');
app.use(logger);

app.get('/', logger, function(req, res) {
    console.log('get!!');
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/get', function(req, res) {
    console.log(req.query);
    res.send('Hello from server (GET): ' + req.query.message);
});

app.get('/fetchHello', function(req, res) {
    console.log(req.query);
    res.send('fetchHello: ' + req.query.message);
});

app.post('/', function(req, res) {
    console.log(req.body);
    res.send('Hello from server: ' + req.body.message);
});

app.post('/myAction', function(req, res) {
    console.log(req.body);
    res.send('myAction: ' + req.body.message);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});