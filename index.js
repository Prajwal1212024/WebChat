const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// const { resolve } = require('node:path/win32');
require('dotenv').config()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

let key = 20;


io.on('connection', (socket) => {
  
    socket.join(key);


    socket.on('chat message', (msg) => {
        socket.to(key).emit('chat message', msg);
    });


});

server.listen(3000, () => {
  console.log('listening on *:'+3000);
});