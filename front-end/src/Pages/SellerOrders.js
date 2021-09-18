import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSellerOrders } from '../services/api';
import NavBarNew from '../Components/newComponents/NabBar';
import Orders from '../Components/newComponents/Orders';

function SellerOrders() {
  const [sales, setSales] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(async () => {
    setSales(await getSellerOrders(user.token));
  }, []);

  // vraw ta dando ruim
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

  const salesRender = () => (
    sales.map((element) => (
      <Link to={ `/seller/orders/${element.id}` } key={ element.id }>
        { console.log({ element }) }
        <div>
          Pedido
          <span data-testid={ `seller_orders__element-order-id-${element.id}` }>
            {element.id}
          </span>
        </div>
        <div>
          <span data-testid={ `seller_orders__element-delivery-status-${element.id}` }>
            {element.status}
          </span>
        </div>
        <div>
          <span data-testid={ `seller_orders__element-order-date-${element.id}` }>
            {ajustData(element.saleDate)}
          </span>
        </div>
        <div>
          <span data-testid={ `seller_orders__element-card-price-${element.id}` }>
            {ajustPrice(element.totalPrice)}
          </span>
        </div>
        <div>
          <span data-testid={ `seller_orders__element-card-address-${element.id}` }>
            {`${element.deliveryAddress} ${element.deliveryNumber}`}
          </span>
        </div>
      </Link>
    ))
  );

  return (
    <>
      <NavBarNew />
      <div className="all-cards">
        {console.log(sales)}
        {salesRender()}
        <Orders />
      </div>
    </>
  );
}

export default SellerOrders;
