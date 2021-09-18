import React from 'react';
import NavBarNew from '../../Components/newComponents/NabBar';
import Orders from '../../Components/newComponents/Orders';
import './style.css';

function SellerOrders() {
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
