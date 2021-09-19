import React from 'react';
import PropTypes from 'prop-types';

const dataTestId = 'seller_order_details__element-order-details-label-order-id';

function OrderId(props) {
  const { id } = props;
  return (
    <div>
      <span>
        <span>Pedido </span>
        <span data-testid={ dataTestId }>{id}</span>
      </span>
    </div>
  );
}

OrderId.propTypes = {
  id: PropTypes.number.isRequired,
};

export default OrderId;
