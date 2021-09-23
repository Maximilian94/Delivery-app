import React, { useEffect } from 'react';
import CardCostumerOrder from '../CardCustumerOrder';
import './style.css';

import { useSocket } from '../../../socket/socket';
import { useOrders } from '../../../Contexts/OrdersContext';

function Orders() {
  const { orders, updateOrders } = useOrders();
  console.log(orders);
  const { socket } = useSocket();

  useEffect(async () => {
    await updateOrders();
  }, []);

  socket.on('newOrderReceived', async () => updateOrders());

  return (
    <div className="orders-div">
      <div className="orders-div-title">
        <span>Escolha sua bebida</span>
      </div>
      <div className="orders-list">
        {orders.map((order) => (
          <CardCostumerOrder selectOrder={ order } key={ order.id } />
        ))}
      </div>
    </div>
  );
}

export default Orders;
