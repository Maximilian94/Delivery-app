import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navigators() {
  const currentPath = window.location.pathname;

  const isActualPage = (linkToUrl) => {
    if (linkToUrl === currentPath) {
      return 'actual-page';
    }
  };

  return (
    <div className="navbar-navigators-div">
      {console.log(currentPath)}
      <Link
        className={ `navbar-navigators-links ${isActualPage('/customer/products')}` }
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        <span>Produtos</span>
      </Link>
      <Link
        className={ `navbar-navigators-links ${isActualPage('/customer/orders')}` }
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        <span>Meus pedidos</span>
      </Link>
    </div>
  );
}

export default Navigators;
