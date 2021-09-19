import React from 'react';
import ImageDeliverOrder from '../../../../../images/delivery-truck.png';
import './style.css';

function Transit() {
  return (
    <button type="button" className="button-order deliver transit">
      <img src={ ImageDeliverOrder } alt="deliver-order" />
      <span>Enviar para entrega</span>
    </button>
  );
}

export default Transit;
