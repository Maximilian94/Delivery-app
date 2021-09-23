import React, { useState, useEffect } from 'react';
import { getCostumerOrders, getSellerOrders } from '../../../services/api';
import CardCostumerOrder from '../CardCustumerOrder';
import './style.css';

import { useSocket } from '../../../socket/socket';

function Orders() {
  const [listOrders, setListOrders] = useState([]);
  const { socket } = useSocket();

  const userType = JSON.parse(localStorage.getItem('user')).role;
  const { token } = JSON.parse(localStorage.getItem('user'));

  const fetchOrders = async () => {
    switch (userType) {
    case 'seller':
      return getSellerOrders(token);

    case 'customer':
      return getCostumerOrders(token);

    default:
      return [];
    }
  };

  useEffect(async () => {
    setListOrders(await fetchOrders());
  }, []);

  socket.on('newOrderReceived', async () => setListOrders(await fetchOrders()));

  return (
    <div className="orders-div">
      <div className="orders-div-title">
        <span>Escolha sua bebida</span>
      </div>
      <div className="orders-list">
        {listOrders.map((order) => (
          <CardCostumerOrder selectOrder={ order } key={ order.id } />
        ))}
      </div>
    </div>
  );
}

export default Orders;
