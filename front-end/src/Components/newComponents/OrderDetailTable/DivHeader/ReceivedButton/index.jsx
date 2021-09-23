import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { editStatusOrder } from '../../../../../services/api';

import { useSocket } from '../../../../../socket/socket';

import boxClosed from '../../../../../images/icons8-produto-usado-96.png';
import boxOpened from '../../../../../images/icons8-caixa-vazia-96.png';

function ReceivedButton(props) {
  const { detailsOrder } = props;
  const [image, setImage] = useState(boxClosed);

  const { socketUpdateOrder } = useSocket();

  const receivedOrder = async () => {
    if (!detailsOrder) return;
    const { status, id, userId, sellerId } = detailsOrder;
    if (status === 'Em Trânsito') {
      const user = JSON.parse(localStorage.getItem('user'));
      await editStatusOrder(user.token, { id, status: 'Entregue' });
      socketUpdateOrder({ sellerId, userId });
    }
  };

  const classByOrderStatus = () => {
    if (!detailsOrder) return;
    const { status } = detailsOrder;

    switch (status) {
    case 'Em Trânsito':
      return { button: 'transit', img: 'no-color', disabled: false };

    case 'Entregue':
      return { button: 'delivered', img: null, disabled: true };

    default:
      return { button: null, img: 'no-color', disabled: true };
    }
  };

  const { button, img, disabled } = classByOrderStatus();

  return (
    <button
      type="button"
      className={ `button-order received ${button} ` }
      disabled={ disabled }
      onClick={ () => receivedOrder() }
      onMouseEnter={ () => setImage(boxOpened) }
      onMouseLeave={ () => setImage(boxClosed) }
    >
      <img
        src={ image }
        alt="deliver-order"
        className={ `${img}` }
      />
      <span>Marcar como entregue</span>
    </button>
  );
}

ReceivedButton.propTypes = {
  detailsOrder: PropTypes.objectOf().isRequired,
};

export default ReceivedButton;
