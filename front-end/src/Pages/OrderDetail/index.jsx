import React, { useEffect } from 'react';

import { useOrders } from '../../Contexts/OrdersContext';

import NavBar from '../../Components/newComponents/NabBar';
import PageTitle from '../../Components/newComponents/PageTitle';
import OrderDetailTable from '../../Components/newComponents/OrderDetailTable';
import './style.css';

function OrderDetail() {
  const { orderDetail, updateOrderDetail } = useOrders();

  useEffect(async () => {
    updateOrderDetail();
  }, []);

  return (
    <div className="order-detail-page">
      <NavBar />
      <div className="content">
        <PageTitle title="Detalhe do pedido" />
        <div>
          <OrderDetailTable detailsOrder={ orderDetail } />
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
