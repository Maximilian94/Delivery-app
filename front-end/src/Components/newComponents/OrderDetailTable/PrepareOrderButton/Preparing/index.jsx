import React from 'react';
import image from '../../../../../images/box.png';
import './style.css';

function Pending() {
  return (
    <button type="button" disabled className="button-order prepare preparing">
      <img src={ image } alt="deliver-order" />
      <span>Preparar pedido</span>
    </button>
  );
}

export default Pending;
