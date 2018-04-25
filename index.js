var server = require("./server");
var router = require("./route")

server.iniciar(router.route);