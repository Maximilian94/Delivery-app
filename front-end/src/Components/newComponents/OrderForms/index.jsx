import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getSellers, finishOrder } from '../../../services/api';
import { CartContext } from '../../../Contexts/CartContext';
import { useSocket } from '../../../socket/socket';

import './style.css';

export default function OrderForms() {
  const history = useHistory();
  const { totalPrice, cartItems, setCartItems } = useContext(CartContext);
  const { socket, socketNewOrder } = useSocket();
  console.log(socket);

  const sellersSimulator = [
    {
      id: 1,
      name: 'Osvaldo',
    },
    {
      id: 2,
      name: 'Tia da creche',
    },
    {
      id: 3,
      name: 'Papai Noel',
    },
  ];

  const [sellers, setSellers] = useState(sellersSimulator);
  // const [vraw, setVraw] = useState('');
  const [saleInfo, setSaleInfo] = useState({
    seller: sellers[0].id, address: '', number: '',
  });

  const handleChange = ({ target: { id, value } }) => setSaleInfo({
    ...saleInfo, [id]: value,
  });

  useEffect(() => {
    const fetchSellers = async () => {
      setSellers(await getSellers());
    };

    fetchSellers();
  }, []);

  const fieldErrorMessage = {
    address: 'Escreva um endereço',
    number: 'Digite o número do endereço',
    noItemsToBuy: 'Você precisa ter ao menos um produto no carrinho',
  };

  const formsValidations = () => {
    const fieldsToValidate = ['address', 'number'];
    const invalidFields = fieldsToValidate.filter((field) => saleInfo[field] === '');

    if (cartItems.length === 0) {
      alert(fieldErrorMessage.noItemsToBuy);
      return false;
    }

    if (invalidFields) {
      invalidFields.forEach((field) => alert(fieldErrorMessage[field]));
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formsValidations()) return;

    const orderInfo = {
      userId: JSON.parse(localStorage.getItem('user'))
        ? JSON.parse(localStorage.getItem('user')).userId
        : 0,
      sellerId: sellers[0].id,
      totalPrice,
      deliveryAddress: saleInfo.address,
      deliveryNumber: saleInfo.number,
      products: cartItems.map(({ id, quantity }) => ({ id, quantity })),
    };

    const response = await finishOrder(orderInfo); // retorna { saleId }

    if (response.saleId) {
      socketNewOrder(orderInfo.sellerId);
      setCartItems([]);
      return !response.message && history.push(`/customer/orders/${response.saleId}`);
    }
  };

  const sellersSelect = () => (
    <label htmlFor="seller">
      <span>P. Vendedora Responsável</span>
      <select
        onChange={ handleChange }
        id="seller"
        data-testid="customer_checkout__select-seller"
      >
        {sellers.map(({ name, id }) => (
          <option value={ id } key={ id }>
            {name}
          </option>
        ))}
      </select>
    </label>
  );

  const address = () => (
    <label htmlFor="address">
      <span>Endereço</span>
      <input
        data-testid="customer_checkout__input-address"
        type="text"
        id="address"
        placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
        onChange={ handleChange }
      />
    </label>
  );

  const addressNumber = () => (
    <label htmlFor="number">
      <span>Número</span>
      <input
        data-testid="customer_checkout__input-addressNumber"
        type="number"
        id="number"
        placeholder="198"
        onChange={ handleChange }
      />
    </label>
  );

  const buttonSubmit = () => (
    <button
      type="submit"
      data-testid="customer_checkout__button-submit-order"
    >
      FINALIZAR PEDIDO
    </button>
  );

  return (
    <section className="order-details-address">
      <form
        onSubmit={ handleSubmit }
        action="/customer/orders/id"
        method="POST"
        className="order-details-forms"
      >
        {sellersSelect()}
        {address()}
        {addressNumber()}
        {buttonSubmit()}
      </form>

    </section>
  );
}
