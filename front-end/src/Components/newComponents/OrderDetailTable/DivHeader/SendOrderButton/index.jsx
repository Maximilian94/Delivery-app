import React from 'react';
import PropTypes from 'prop-types';

import ImageDeliverOrder from '../../../../../images/delivery-truck.png';

import { editStatusOrder } from '../../../../../services/api';
import { useSocket } from '../../../../../socket/socket';

const dataTestId = 'seller_order_details__button-dispatch-check';

function SendOrderButton(props) {
  const { detailsOrder } = props;
  const { socketUpdateOrder } = useSocket();

  const sendOrder = async () => {
    if (!detailsOrder) return;
    const { status, id, userId, sellerId } = detailsOrder;
    if (status === 'Preparando') {
      const user = JSON.parse(localStorage.getItem('user'));
      await editStatusOrder(user.token, { id, status: 'Em Trânsito' });
      socketUpdateOrder({ sellerId, userId });
    }
  };

  const classByOrderStatus = () => {
    if (!detailsOrder) return;
    const { status } = detailsOrder;

    switch (status) {
    case 'Pendente':
      return { button: 'pending', img: 'no-color', disabled: true };

    case 'Preparando':
      return { button: 'preparing', img: 'no-color', disabled: false };

    case 'Em Trânsito':
      return { button: 'transit', img: '', disabled: true };

    default:
      return { button: 'transit', img: '', disabled: true };
    }
  };

  const { button, disabled, img } = classByOrderStatus();

  return (
    <button
      type="button"
      disabled={ disabled }
      className={ `button-order deliver ${button}` }
      onClick={ () => sendOrder() }
      data-testid={ dataTestId }
    >
      <img src={ ImageDeliverOrder } alt="deliver-order" className={ `${img}` } />
      <span>Enviar pedido</span>
    </button>
  );
}

SendOrderButton.propTypes = {
  detailsOrder: PropTypes.objectOf().isRequired,
};

export default SendOrderButton;
