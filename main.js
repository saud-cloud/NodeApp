// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n");
});

// listen on localhost:8000
server.listen(8000, 0.0.0.0);
console.log("Server listening on port 8000 :  http://35.177.175.56/");
