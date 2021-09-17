import React from 'react';

import { useCart } from '../../../../Contexts/CartContext';

import './style.css';

export default function OrderTable() {
  const { cartItems, setCartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity, 0,
  );

  const stringTotalPrice = String(totalPrice.toFixed(2)).replace(/\./g, ',');

  return (
    <div className="divTable">
      <table cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ id, name, quantity, price }, i) => (
            <tr key={ id }>
              <td
                className="item-number"
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                {i + 1}
              </td>
              <td
                className="item-description"
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                {name}
              </td>
              <td
                className="item-quantity"
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                {quantity}
              </td>
              <td
                className="item-value"
                data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
              >
                {`${price}`.replace(/\./g, ',')}
              </td>
              <td
                className="item-total"
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                {`${(quantity * price).toFixed(2)}`.replace(/\./g, ',')}
              </td>
              <td className="item-remove">
                <button
                  data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                  onClick={ () => setCartItems(cartItems
                    .filter((item) => item.id !== id)) }
                  type="button"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        data-testid="customer_checkout__element-order-total-price"
        className="table-total-price"
      >
        {/**
         * Na verdade, aqui será colocao o totalPrice
         * a lógica de soma será feita em outro lugar
         */}
        Total:
        {` R$ ${stringTotalPrice}`}
      </div>
    </div>
  );
}
