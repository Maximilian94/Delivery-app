import React from 'react';
import PropTypes from 'prop-types';

import Pending from './Pending';
import Preparing from './Preparing';
import Transit from './Transit';

import './style.css';

function SendOrderButton(props) {
  const { detailsOrder } = props;

  const buttonByOrderStatus = () => {
    if (!detailsOrder) return;
    const { status } = detailsOrder;
    console.log(status);

    switch (status) {
    case 'Pendente':
      return <Pending />;

    case 'Preparando':
      return <Preparing />;

    case 'Em Trânsito':
      return <Transit />;

    default:
      return null;
    }
  };

  return (
    <div>
      {buttonByOrderStatus()}
    </div>
  );
}

SendOrderButton.propTypes = {
  detailsOrder: PropTypes.objectOf().isRequired,
};

export default SendOrderButton;
