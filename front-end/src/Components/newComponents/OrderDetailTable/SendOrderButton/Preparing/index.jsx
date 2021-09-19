import React from 'react';
import ImageDeliverOrder from '../../../../../images/delivery-truck.png';
import './style.css';

function Preparing() {
  return (
    <button type="button" className="button-order deliver preparing">
      <img src={ ImageDeliverOrder } alt="deliver-order" className="no-color" />
      <span>Enviar para entrega</span>
    </button>
  );
}

export default Preparing;
