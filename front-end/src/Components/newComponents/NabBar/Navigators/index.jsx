import React from 'react';
import { Link } from 'react-router-dom';

const navigatorsStyle = {
  display: 'flex',
  padding: '10px 5px',
};

const navigationStyle = {
  backgroundColor: '#ea7c69',
  color: 'white',
  borderRadius: '12px',
  padding: '5px',
  margin: '0 20px',
  display: 'flex',
  alignItems: 'center',
};

function Navigators() {
  return (
    <div>
      <div
        style={ navigatorsStyle }
      >
        <Link
          style={ navigationStyle }
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <span>Produtos</span>
        </Link>
        <Link
          style={ navigationStyle }
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <span>Meus pedidos</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigators;
