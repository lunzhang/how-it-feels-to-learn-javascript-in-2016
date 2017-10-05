var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var port = process.env.PORT || 80;
var fs = require('fs');

// allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// simple hello route
app.get('/hello', function(req, res) {
  res.send('Hello World');
});

// set port and start server
app.set('port', port);
server.listen(port);
