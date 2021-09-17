import React from 'react';

import OrderTable from '../../Components/newComponents/productCard/OrderTable';
import OrderForms from '../../Components/newComponents/OrderForms';
import NavBar from '../../Components/newComponents/NabBar';
import PageTitle from '../../Components/newComponents/PageTitle';

import '../../styles/Checkout.css';
import './style.css';

export default function Checkout() {
  return (
    <div className="checkout-page">
      <NavBar />
      <div className="content">
        <PageTitle title="Finalizar pedido" />
        <OrderTable />
        <OrderForms />
      </div>
    </div>
  );
}
