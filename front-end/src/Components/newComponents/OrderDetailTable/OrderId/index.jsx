import React from 'react';
import PropTypes from 'prop-types';

function OrderId(props) {
  const { id } = props;
  return (
    <div>
      <span>{`Pedido ${id}`}</span>
    </div>
  );
}

OrderId.propTypes = {
  id: PropTypes.number.isRequired,
};

export default OrderId;
