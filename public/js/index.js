var socket = io();

socket.on('connect', function() {
  console.log('Connected to Server');

  socket.emit('createMessage', {
    from: "Sarang",
    text: "Hello i am here"
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});