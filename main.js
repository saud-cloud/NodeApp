// load the http module
/*
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! the following webapp is being created by saud \n");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening on port 8000 :  http://127.0.0.1:8000/");
*/
var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
