const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket)=>{
  console.log('New user connected');

  // socket.emit('newMessage', {                 //EMITS MESSAGES TO A SINGLE USER
  //   from: "Sanand",
  //   text: "HAiiii",
  //   createdAt: 1234
  // });

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app',
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined',
    createdAt: new Date().getTime()
  });

  socket.on('createMessage', (message)=>{
    console.log('createMessage', message);
    // io.emit('newMessage', {               //EMITS MESSAGEGES TO MULTIPLE USERS
    //   from:message.from,
    //   text:message.text,
    //   createdAt:new Date().getTime()
    // });
    socket.broadcast.emit('newMessage', {   //EMITS MESAGES TO OTHERS AND NOT FOR ITSELF
      from:message.from,
      text:message.text,
      createdAt:new Date().getTime()
    });
  });

  socket.on('disconnect',()=>{
    console.log('User was Disconnected');
  });
});

server.listen(port, ()=>{
  console.log(`The server is up at port ${port}`);
});
