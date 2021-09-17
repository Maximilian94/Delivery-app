import React, { useState, useEffect } from 'react';
import { getCostumerOrders } from '../../../services/api';
import CardCostumerOrder from '../CardCustumerOrder';
import './style.css';

function Orders() {
  const [listOrders, setListOrders] = useState([]);

  const fetchAllOrders = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const productsList = await getCostumerOrders(token);
    setListOrders(productsList);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

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
