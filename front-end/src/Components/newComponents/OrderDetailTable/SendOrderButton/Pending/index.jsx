import React from 'react';
import ImageDeliverOrder from '../../../../../images/delivery-truck.png';
import './style.css';

function Pending() {
  return (
    <button type="button" disabled className="button-order deliver pending">
      <img src={ ImageDeliverOrder } alt="deliver-order" className="no-color" />
      <span>Pendente</span>
    </button>
  );
}

export default Pending;
