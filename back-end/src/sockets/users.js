//  User
let usersSocketsOnline = [];

const removeOnlineUser = (socketId) => {
  usersSocketsOnline = usersSocketsOnline.filter(user => user.socketId !== socketId);
};

const connectNewUser = (data, socket) => {
  console.log(data);
  usersSocketsOnline.push({...data, socketId: socket.id});
};

//  SellerSenders

module.exports = (io) => io.on('connection', (socket) => {
  const updateSellerOrders = (sellerId) => {
    const sellerSocketsUser = usersSocketsOnline.filter((data) => data.userId === sellerId);

    sellerSocketsUser.forEach((sellerConnection) => {
      io.to(sellerConnection.socketId).emit('newOrderReceived');
    })
  };

  const updateOrder = ({sellerId, userId}) => {
    const socketsToSend = usersSocketsOnline.filter((data) => {
      return data.userId === sellerId ||data.userId === userId;
    });

    socketsToSend.forEach((onlineSocket) => {
      io.to(onlineSocket.socketId).emit('updateOrders');
    })
    console.log('Atualiza detalhes de uma ordem');
  }

  socket.on('userConnected', (data) => connectNewUser(data, socket));

  socket.on('disconnect', () => removeOnlineUser(socket.id));

  socket.on('newOrder', (sellerId) => updateSellerOrders(sellerId));

  socket.on('updateOrder', ({sellerId, userId}) => updateOrder({sellerId, userId}));

});
