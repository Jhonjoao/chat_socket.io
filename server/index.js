const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat.message', data => {
        console.log('[SOCKET] Chat.message => ', data)
        io.emit('chat.message', data)
    })
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});

http.listen(3332, () => {
  console.log('listening on *:3332');
});
