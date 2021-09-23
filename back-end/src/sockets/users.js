const usersOnline = []

module.exports = (io) => io.on('connection', (socket) => {
  console.log('Novo usuario conectado');

  socket.on('userConnected', (data) => {
    usersOnline.push({...data, socketId: socket.id});
    console.log(usersOnline);
  });

  socket.on('newOrder', (sellerId) => {
    const sellerUser = usersOnline.find((data) => data.userId === sellerId);
    console.log(sellerUser.socketId);
    io.to(sellerUser.socketId).emit('newOrderReceived');
    console.log('Nova compra feita');
  })

});
