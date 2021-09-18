import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navigators() {
  const currentPath = window.location.pathname;
  const userType = JSON.parse(localStorage.getItem('user')).role;

  const isActualPage = (linkToUrl) => {
    if (linkToUrl === currentPath) {
      return 'actual-page';
    }
  };

  const links = (pageName, linkTitle) => (
    <Link
      className={ `navbar-navigators-links ${isActualPage(`/${userType}/${pageName}`)}` }
      to={ `/${userType}/${pageName}` }
      data-testid={ `${userType}_products__element-navbar-link-${pageName}` }
    >
      <span>{linkTitle}</span>
    </Link>
  );

  const LinksPages = {
    orders: { pageName: 'orders', linkTitle: 'Meus pedidos' },
    products: { pageName: 'products', linkTitle: 'Produtos' },
  };

  const LinksByUserType = {
    customer: [
      LinksPages.products,
      LinksPages.orders,
    ],
    seller: [
      LinksPages.orders,
    ],
  };

  const generateLinks = () => {
    if (!LinksByUserType[userType]) {
      return alert('Verifique com a administração seu tipo de usuario');
    }

    return LinksByUserType[userType].map(({ pageName, linkTitle }) => (
      links(pageName, linkTitle)
    ));
  };

  return (
    <div className="navbar-navigators-div">
      {console.log(userType)}
      {generateLinks()}
    </div>
  );
}

export default Navigators;
