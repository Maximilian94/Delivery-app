import React from 'react';
import PropTypes from 'prop-types';
import image from '../../../../images/box.png';

import { editStatusOrder } from '../../../../services/api';
import './style.css';

function PrepareOrderButton(props) {
  const { detailsOrder } = props;

  const classOrderStatus = () => {
    if (!detailsOrder) return;
    const { status } = detailsOrder;

    switch (status) {
    case 'Pendente':
      return { button: 'pending', img: 'no-color', disabled: false };

    default:
      return { button: null, img: null, disabled: true };
    }
  };

  const prepareOrder = async () => {
    if (!detailsOrder) return;
    const { status, id } = detailsOrder;
    if (status === 'Pendente') {
      const user = JSON.parse(localStorage.getItem('user'));
      await editStatusOrder(user.token, { id, status: 'Preparando' });
      window.location.reload();
    }
  };

  const { button, disabled, img } = classOrderStatus();

  return (
    <button
      type="button"
      className={ `button-order prepare ${button} ` }
      disabled={ disabled }
      onClick={ () => prepareOrder() }
    >
      <img src={ image } alt="deliver-order" className={ `${img}` } />
      <span>Preparar pedido</span>
    </button>
  );
}

PrepareOrderButton.propTypes = {
  detailsOrder: PropTypes.objectOf().isRequired,
};

export default PrepareOrderButton;
