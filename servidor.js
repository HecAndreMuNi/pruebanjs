//Instalar socket.io !!!!!
//ESte código se pone fuera del HTML público
var cvanderito = require("socket.io").listen(6969); //Nombre del servidor

cvanderito.sockets.on("connection", arranque);

function arranque(usuario){
  usuario.on("nuevoNombre", emitir);
}

function emitir(data){
	cvanderito.sockets.emit("NombreDesdeServidor", data + "*");
}

//El código completo está en mejorando.la/node.js/servidor.js
