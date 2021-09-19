import React from 'react';
import PropTypes from 'prop-types';

import Pending from './Pending';
import Preparing from './Preparing';

import './style.css';

function PrepareOrderButton(props) {
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
      return <Preparing />;

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

PrepareOrderButton.propTypes = {
  detailsOrder: PropTypes.objectOf().isRequired,
};

export default PrepareOrderButton;
