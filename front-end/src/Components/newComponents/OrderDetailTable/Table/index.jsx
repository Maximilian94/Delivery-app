import React from 'react';

import PropTypes from 'prop-types';

import { formatPrice } from '../../../../services/functions';

const getDataTestId = (key, index) => {
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

const totalOrderPrice = (items) => items.reduce((acc, actual) => {
  const price = parseFloat(actual.price);
  return acc + (price * actual.salesProduct.quantity);
}, 0);

function Table(props) {
  const { items = [] } = props;
  console.log(items);
  return (
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
        {items.map(({ id, name, salesProduct, price }, index) => (
          <tr key={ id }>
            <td
              className="item-number"
              data-testid={ getDataTestId('item', index + 1) }
            >
              {index + 1}
            </td>
            <td
              className="item-description"
              data-testid={ getDataTestId('description', index + 1) }
            >
              {name}
            </td>
            <td
              className="item-quantity"
              data-testid={ getDataTestId('quantity', index + 1) }
            >
              {salesProduct.quantity}
            </td>
            <td
              className="item-value"
              data-testid={ getDataTestId('value', index + 1) }
            >
              {`R$ ${price}`.replace(/\./g, ',')}
            </td>
            <td
              className="item-total"
              data-testid={ getDataTestId('subTotal', index + 1) }
            >
              {`R$ ${(salesProduct.quantity * price).toFixed(2)}`.replace(/\./g, ',')}
            </td>
          </tr>
        ))}
      </tbody>
      <div data-testid={ getDataTestId('total') }>
        {`Total: ${formatPrice(totalOrderPrice(items))}`}
      </div>
    </table>
  );
}

Table.propTypes = {
  items: PropTypes.array,
}.isRequired;

export default Table;
