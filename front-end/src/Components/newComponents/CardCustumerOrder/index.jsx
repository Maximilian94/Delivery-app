import React from 'react';
import { Link } from 'react-router-dom';

import style from '../../../styles/funcstions';
import './style.css';

function CardCostumerOrder(selectOrder) {
  const { selectOrder: userOrder } = selectOrder;
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = userOrder;
  const userType = JSON.parse(localStorage.getItem('user')).role;

  function ajustData(data) {
    const limit = 2;
    let newData = data.split('T', limit);
    newData = newData[0].split('-', limit + 1);
    return newData.reverse().join('/');
  }

  function ajustPrice(price) {
    const newPrice = price.replace('.', ',');
    return newPrice;
  }

  const cardIdentification = () => (
    <div className="order-card-identification">
      Pedido
      <span data-testid={ `${userType}_orders__element-order-id-${id}` }>
        { id }
      </span>
    </div>
  );

  const cardStatus = () => (
    // <div className={ `order-card-status ${style.orderStatusClassName(status)}` }>
    <div
      className="order-card-status"
      style={ { backgroundColor: `${style.colorByOrderStatus(status)}` } }
    >
      <span data-testid={ `${userType}_orders__element-delivery-status-${id}` }>
        {console.log(style)}
        { status }
      </span>
    </div>
  );

  const cardDataAndPrice = () => (
    <div className="order-card-data-price">
      <span data-testid={ `${userType}_orders__element-order-date-${id}` }>
        { ajustData(saleDate) }
      </span>
      <span data-testid={ `${userType}_orders__element-card-price-${id}` }>
        { `R$ ${ajustPrice(totalPrice)}` }
      </span>
    </div>
  );

  const address = () => {
    if (userType === 'seller') {
      return (
        <div className="order-card-address">
          <span>{ `${deliveryAddress}, ${deliveryNumber}` }</span>
        </div>
      );
    }
  };

  return (
    <Link to={ `/${userType}/orders/${id}` } className="order-card">
      {cardIdentification()}
      <div className="order-card-information">
        <div className="order-card-information-up">
          {cardStatus()}
          {cardDataAndPrice()}
        </div>
        {address()}
      </div>
    </Link>
  );
}

export default CardCostumerOrder;
