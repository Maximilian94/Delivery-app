import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../Contexts/CartContext';
import cartIcon from '../../../images/grocery-cart.png';
import './style.css';

function CartButton() {
  const { totalPrice } = useCart();
  const convertDotToComma = (string) => string.replace(/\./g, ',');
  const price = convertDotToComma(parseFloat(totalPrice).toFixed(2));

  const isTotalPriceZero = totalPrice === 0;

  return (
    <button
      type="button"
      disabled={ isTotalPriceZero }
      data-testid="customer_products__button-cart"
      className="cart-button"
    >
      <Link to="checkout" className="cart-button-link">
        <img src={ cartIcon } alt="cart" />
        <span
          data-testid="customer_products__checkout-bottom-value"
          className="cart-button-price"
        >
          {` ${price}`}
        </span>
      </Link>
    </button>
  );
}

export default CartButton;
