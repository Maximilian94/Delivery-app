import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import DivHeader from './DivHeader';
import Table from './Table';

function OrderDetailTable(props) {
  const { detailsOrder = [] } = props;

  return (
    <div className="order-details-div">
      <DivHeader detailsOrder={ detailsOrder } />
      <Table items={ detailsOrder.product } />
    </div>
  );
}

OrderDetailTable.propTypes = {
  detailsOrder: PropTypes.objectOf().isRequired,
};

export default OrderDetailTable;
