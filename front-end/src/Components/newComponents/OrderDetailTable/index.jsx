import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import DivHeader from './DivHeader';

function OrderDetailTable(props) {
  const { detailsOrder = [] } = props;

  const orderTable = () => <p>Aoba</p>;

  return (
    <div className="order-details-div">
      <DivHeader detailsOrder={ detailsOrder } />
      {orderTable()}
    </div>
  );
}

OrderDetailTable.propTypes = {
  detailsOrder: PropTypes.objectOf().isRequired,
};

export default OrderDetailTable;
