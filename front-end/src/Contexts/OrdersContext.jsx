import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

import { getSellerOrders, getCostumerOrders, saleById } from '../services/api';
import { useSocket } from '../socket/socket';

export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [orderDetail, setOrderDetail] = useState({});
  const { socket } = useSocket();

  const updateOrderDetail = async () => {
    const { location: { pathname } } = window;
    if (!pathname.includes('orders/')) return;

    console.log('Fazendo o update');

    const userInfo = JSON.parse(localStorage.getItem('user'));

    const orderId = pathname.split('orders/')[1];
    const order = await saleById(orderId, userInfo.token);
    console.log(order);

    setOrderDetail(order);
  };

  const fetchOrders = async () => {
    const userType = JSON.parse(localStorage.getItem('user')).role;
    const { token } = JSON.parse(localStorage.getItem('user'));

    switch (userType) {
    case 'seller':
      return getSellerOrders(token);

    case 'customer':
      return getCostumerOrders(token);

    default:
      return [];
    }
  };

  const updateOrders = async () => { setOrders(await fetchOrders()); };

  socket.on('updateOrders', async () => {
    await updateOrders();
    await updateOrderDetail();
    console.log('Vai atualizar o pedido');
  });

  const context = {
    orders, setOrders, updateOrders, orderDetail, updateOrderDetail,
  };

  return (
    <OrdersContext.Provider value={ context }>
      { children }
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);
  return context;
}

OrdersProvider.propTypes = {
  children: node,
}.isRequired;
