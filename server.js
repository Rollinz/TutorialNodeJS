// var http = require("http");

// http.createServer(function(request, response){
//     response.writeHead(200,{"Content-Type": "text/html"});
//     response.write("Hola Mundo desde el server");
//     response.end();
// }).listen(8888);

var http = require("http");
var url = require("url");

function iniciar() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion para " + pathname + " recibida.");
        
        route(pathname);
        
        response.writeHead(200, {"content-type":"text/html"});
        response.write("Holo Node JS");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
}
exports.iniciar = iniciar;

