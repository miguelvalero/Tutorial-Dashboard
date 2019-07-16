let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 8080;
let conectados = [];
let conectadosPrivado = [];
let  intervalID;
let cont =0;

let tick=0;
function EnviarPublicidad() {
  // Han pasado 5 segundos
  tick = tick+1;
  io.emit('tick', tick*5);
 }

io.on('connection', (socket) => {
    console.log('se ha conectado un cliente con el que me comunicare a traves del socket: '+ socket.id);
    if (cont == 0) {
      tick = 0;
      intervalID = setInterval(EnviarPublicidad, 5000);
    }
    cont = cont+1;
    let nombre;
    socket.on('nombre', (message) => {
      console.log('el nombre del cliente es: '+ message);
      nombre = message;
      conectados.push (message);
      console.log ('conectados: '+ conectados);
      io.emit('conectados', JSON.stringify(conectados));
    });

    socket.on('mensaje', (message) => {
      console.log('nuevo mensaje para el chat: '+ message);

      io.emit('mensaje', message);
    });

    socket.on('disconnect', () => {
      cont = cont-1;
      if (cont ==0) {
        clearInterval(intervalID);
      }

      console.log('Client disconnected');
      // Vamos a eliminar el socket y el nombre de las listas
      var i = conectados.indexOf(nombre);
      conectados.splice (i,1);
      // envio de nuevo la lista de conectados
      io.emit('conectados', JSON.stringify(conectados));
    });
});

let privado = io.of ('/privado');

privado.on('connection', (socket) => {
  console.log('se ha conectado un cliente al chat privado');
  let nombre;
  socket.on('nombre', (message) => {
    console.log('el nombre del cliente es: '+ message);
    nombre = message;
    conectadosPrivado.push (message);
    console.log ('conectados al chat privado: '+ conectadosPrivado);
    privado.emit('conectados', JSON.stringify(conectadosPrivado));
  });

  socket.on('mensaje', (message) => {
    console.log('nuevo mensaje para el chat privado: '+ message);

    privado.emit('mensaje', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected del chat privado');
    var i = conectadosPrivado.indexOf(nombre);
    conectadosPrivado.splice (i,1);
    // envio de nuevo la lista de conectados
    privado.emit('conectados', JSON.stringify(conectadosPrivado));
  });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
