import React from 'react';
import PropTypes from 'prop-types';
import image from '../../../../images/box.png';

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

  const { button, disabled, img } = classOrderStatus();

  return (
    <button
      type="button"
      className={ `button-order prepare ${button} ` }
      disabled={ disabled }
      onClick={ () => console.log('Aoba') }
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
