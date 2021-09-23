//  User
let usersSocketsOnline = [];

const removeOnlineUser = (socketId) => {
  usersSocketsOnline = usersSocketsOnline.filter(user => user.socketId !== socketId);
};

const connectNewUser = (data, socket) => {
  usersSocketsOnline.push({...data, socketId: socket.id});
};

//  SellerSenders

module.exports = (io) => io.on('connection', (socket) => {
  const updateSellerOrders = (sellerId) => {
    console.log('Envia ordem de atualização');
    const sellerSocketsUser = usersSocketsOnline.filter((data) => data.userId === sellerId);

    sellerSocketsUser.forEach((sellerConnection) => {
      io.to(sellerConnection.socketId).emit('newOrderReceived');
    })
  };

  socket.on('userConnected', (data) => connectNewUser(data, socket));

  socket.on('disconnect', () => removeOnlineUser(socket.id));

  socket.on('newOrder', (sellerId) => updateSellerOrders(sellerId));

});
