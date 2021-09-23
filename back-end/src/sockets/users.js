const usersOnline = []

module.exports = (io) => io.on('connection', (socket) => {
  console.log('Novo usuario conectado');

  socket.on('userConnected', (data) => {
    usersOnline.push(data);
    console.log(usersOnline);
  });

});
