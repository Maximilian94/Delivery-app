import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NavBar from '../../Components/newComponents/NabBar';
import PageTitle from '../../Components/newComponents/PageTitle';
import OrderDetailTable from '../../Components/newComponents/OrderDetailTable';
import './style.css';

import { useOrders } from '../../Contexts/OrdersContext';

function SellerDetails() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const { orderDetail, updateOrderDetail } = useOrders();
  const linksNavbar = [
    {
      text: 'pedido',
      url: 'https://localhost:3000',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setName(user.name);
  }, [id]);

  useEffect(async () => {
    updateOrderDetail();
  }, []);

  return (
    <div className="seller-order-page">
      <NavBar links={ linksNavbar } user={ name } />
      <div className="content">
        <PageTitle title="Detalhe do pedido" />
        <div>
          <OrderDetailTable detailsOrder={ orderDetail } />
        </div>
      </div>
    </div>
  );
}

SellerDetails.propTypes = {
  match: PropTypes.string,
}.isRequired;

export default SellerDetails;
