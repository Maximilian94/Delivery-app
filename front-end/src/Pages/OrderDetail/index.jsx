import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saleById } from '../../services/api';

import NavBar from '../../Components/newComponents/NabBar';
import PageTitle from '../../Components/newComponents/PageTitle';
import OrderDetailTable from '../../Components/newComponents/OrderDetailTable';
import './style.css';

function OrderDetail() {
  const [sale, setSale] = useState();
  const { location: { pathname } } = useHistory();
  const orderId = pathname.split('orders/')[1];

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const orderInfo = async () => {
      const order = await saleById(orderId, userInfo.token);
      setSale(order);
    };
    orderInfo();
  }, [orderId]);

  return (
    <div className="order-detail-page">
      <NavBar />
      <div className="content">
        <PageTitle title="Detalhe do pedido" />
        <div>
          <OrderDetailTable detailsOrder={ sale } />
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
