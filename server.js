// Require modules
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

var port = process.env.PORT || CONFIG.port || 3000;
const app = express();

// App set up
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.use('./node_modules', express.static(path.join(__dirname, './node_modules')))

// const webpack = require('webpack');
//
// const config = require('./webpack.config');
// const compiler = webpack(config);


// All requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


// const server = http.createServer(app);
// server.listen(port);

app.listen(port, "0.0.0.0", function(){console.log("Listening on port: " + port)});
