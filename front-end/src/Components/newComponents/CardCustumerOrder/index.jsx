import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function CardCostumerOrder(selectOrder) {
  const { selectOrder: userOrder } = selectOrder;
  const { id, status, saleDate, totalPrice } = userOrder;

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
      <span data-testid={ `customer_orders__element-order-id-${id}` }>
        { id }
      </span>
    </div>
  );

  const cardStatus = () => (
    <div className="order-card-status pending">
      <span data-testid={ `customer_orders__element-delivery-status-${id}` }>
        { status }
      </span>
    </div>
  );

  const cardDataAndPrice = () => (
    <div className="order-card-data-price">
      <span data-testid={ `customer_orders__element-order-date-${id}` }>
        { ajustData(saleDate) }
      </span>
      <span data-testid={ `customer_orders__element-card-price-${id}` }>
        { `R$ ${ajustPrice(totalPrice)}` }
      </span>
    </div>
  );

  return (
    <Link to={ `/customer/orders/${id}` } className="order-card">
      {cardIdentification()}
      {cardStatus()}
      {cardDataAndPrice()}
    </Link>
  );
}

export default CardCostumerOrder;
