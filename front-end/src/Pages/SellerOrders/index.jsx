import React from 'react';
import NavBarNew from '../../Components/newComponents/NabBar';
import Orders from '../../Components/newComponents/Orders';
import './style.css';

import { useSocket } from '../../socket/socket';

function SellerOrders() {
  const { socket } = useSocket();

  socket.on('newOrderReceived', () => console.log('Novo pedido recebido'));

  return (
    <>
      <NavBarNew />
      <div className="seller-orders-page">
        <Orders />
      </div>
    </>
  );
}

export default SellerOrders;
