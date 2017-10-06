const path = require('path');
const express = require('express');
const fs = require('fs');

const configPort = require(__dirname + '/../config.json').port;

const app = express();
const port = process.env.PORT || configPort;
const server = require('http').Server(app);

// allow cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// simple hello route
app.get('/hello', (req, res) => {
  res.send('Hello World');
});

// set port and start server
app.set('port', port);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
