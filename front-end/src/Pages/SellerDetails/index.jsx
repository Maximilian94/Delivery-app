import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NavBar from '../../Components/newComponents/NabBar';
import { saleById } from '../../services/api';
import { formatPrice } from '../../services/functions';
import PageTitle from '../../Components/newComponents/PageTitle';
import OrderDetailTable from '../../Components/newComponents/OrderDetailTable';
import './style.css';

function SellerDetails() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [detailsOrder, setDetailsOrder] = useState();
  let totalOrder = 0;
  const linksNavbar = [
    {
      text: 'pedido',
      url: 'https://localhost:3000',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];

  const allDataIds = (key, index) => {
    const dataIds = {
      item: `seller_order_details__element-order-table-item-number-${index}`,
      name: `seller_order_details__element-order-table-name-${index}`,
      quantity: `seller_order_details__element-order-table-quantity-${index}`,
      price: `seller_order_details__element-order-table-unit-price-${index}`,
      subTotal: `seller_order_details__element-order-table-sub-total-${index}`,
      total: 'seller_order_details__element-order-total-price',
    };

    return dataIds[key];
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setName(user.name);
    const getSaleDetails = async () => {
      const request = await saleById(id, user.token);
      setDetailsOrder(request);
    };
    getSaleDetails();
  }, [id]);

  return (
    <div className="seller-order-page">
      <NavBar links={ linksNavbar } user={ name } />
      <div className="content">
        <PageTitle title="Detalhe do pedido" />
        <div>
          <OrderDetailTable detailsOrder={ detailsOrder } />
          {detailsOrder && (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Valor Unitário</th>
                    <th>Sub-total</th>
                  </tr>
                </thead>
                <tbody>
                  {detailsOrder.product.map((product, index) => {
                    const { id: idProduct, name: nameProduct, price } = product;
                    const {
                      salesProduct: { quantity },
                    } = product;
                    const indexMap = index + 1;
                    totalOrder += price * quantity;

                    return (
                      <tr key={ idProduct }>
                        <td data-testid={ allDataIds('item', indexMap) }>
                          {indexMap}
                        </td>
                        <td data-testid={ allDataIds('name', indexMap) }>
                          {nameProduct}
                        </td>
                        <td data-testid={ allDataIds('quantity', indexMap) }>
                          {quantity}
                        </td>
                        <td data-testid={ allDataIds('price', indexMap) }>
                          {formatPrice(price)}
                        </td>
                        <td data-testid={ allDataIds('subTotal', indexMap) }>
                          {formatPrice(price * quantity)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div data-testid={ allDataIds('total') }>
                {`Total: ${formatPrice(totalOrder)}`}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

SellerDetails.propTypes = {
  match: PropTypes.string,
}.isRequired;

export default SellerDetails;
