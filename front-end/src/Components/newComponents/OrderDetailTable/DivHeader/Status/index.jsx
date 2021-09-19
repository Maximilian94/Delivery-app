import React from 'react';
import PropTypes from 'prop-types';

import style from '../../../../../styles/funcstions';

const dataTestId = 'seller_order_details__element-order-details-label-delivery-status';

function Status(props) {
  const { status } = props;
  return (
    <div
      className="order-status"
      style={ { backgroundColor: `${style.colorByOrderStatus(status)}` } }
      data-testid={ dataTestId }
    >
      <span>{ status }</span>
    </div>
  );
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
