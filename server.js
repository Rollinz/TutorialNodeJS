// var http = require("http");

// http.createServer(function(request, response){
//     response.writeHead(200,{"Content-Type": "text/html"});
//     response.write("Hola Mundo desde el server");
//     response.end();
// }).listen(8888);

var http = require("http");

function onRequest(request, response){
    console.log("Peticion recibida.");
    response.writeHead(200, {"content-type":"text/html"});
    response.write("Holo NodeJS");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Servidor Iniciado.");

