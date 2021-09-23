//  https://dev.to/bravemaster619/how-to-prevent-multiple-socket-connections-and-events-in-react-531d

import React, { createContext, useContext } from 'react';
import io from 'socket.io-client';
import { node } from 'prop-types';

// export const socket = io('http://localhost:3001');
// export const SocketContext = React.createContext(socket);

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const socket = io('http://localhost:3001');
  const user = JSON.parse(localStorage.getItem('user'));

  const socketNewOrder = (sellerId) => {
    socket.emit('newOrder', sellerId);
  };

  const socketUpdateOrder = ({ sellerId, userId }) => {
    socket.emit('updateOrder', { sellerId, userId });
  };

  const socketLogin = (userData) => {
    socket.emit('userConnected', { ...userData });
  };

  // const socketNewOrderReceived = () => {
  //   socket.on('newOrderReceived', () => console.log('Novo pedido recebido'));
  // }

  if (user) {
    socket.emit('userConnected', { ...user });
  }

  const context = {
    socket,
    socketNewOrder,
    socketUpdateOrder,
    socketLogin,
  };

  return (
    <SocketContext.Provider value={ context }>
      { children }
    </SocketContext.Provider>
  );
}

export function useSocket() {
  const context = useContext(SocketContext);
  return context;
}

SocketProvider.propTypes = {
  children: node,
}.isRequired;
