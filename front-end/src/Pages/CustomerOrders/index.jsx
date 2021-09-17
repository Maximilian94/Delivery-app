import React from 'react';
import NavBar from '../../Components/newComponents/NabBar';
import Orders from '../../Components/newComponents/Orders';
import './style.css';

function CustomerOrders() {
  return (
    <div className="orders-page">
      <NavBar />
      <Orders />
    </div>
  );
}

export default CustomerOrders;
