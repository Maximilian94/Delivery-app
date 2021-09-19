import React from 'react';
import image from '../../../../../images/box.png';
import './style.css';

function Pending() {
  return (
    <button type="button" className="button-order prepare pending">
      <img src={ image } alt="deliver-order" className="no-color" />
      <span>Preparar pedido</span>
    </button>
  );
}

export default Pending;
