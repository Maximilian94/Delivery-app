import React from 'react';
import { Link } from 'react-router-dom';
import LogOutImage from '../../../../images/logout.png';
import './style.css';

function LogOut() {
  return (
    <div
      data-testid="customer_products__element-navbar-link-logout"
      className="exit-button"
    >
      <Link to="/login">
        <button
          type="button"
          onClick={ () => localStorage.clear() }
        >
          <img src={ LogOutImage } alt="logout" />
        </button>
      </Link>
    </div>
  );
}

export default LogOut;
