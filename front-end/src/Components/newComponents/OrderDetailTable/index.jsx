import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../../../services/functions';

import SendOrderButton from './SendOrderButton';
import PrepareOrderButton from './PrepareOrderButton';
import OrderId from './OrderId';
import Date from './Date';
import Status from './Status';

import './style.css';

function OrderDetailTable(props) {
  const { detailsOrder = [] } = props;
  const { status, id, saleDate } = detailsOrder;

  const orderDivHeader = () => (
    <div className="order-details-div-header">
      <div className="order-details-div-header-colum">
        <OrderId id={ id } />
        <Date date={ formatDate(saleDate) } />
      </div>
      <div className="order-details-div-header-colum">
        <Status status={ status } />
      </div>
      <div className="order-details-div-header-colum">
        <PrepareOrderButton detailsOrder={ detailsOrder } />
        <SendOrderButton detailsOrder={ detailsOrder } />
      </div>
    </div>
  );

  return (
    <div className="order-details-div">
      {orderDivHeader()}
    </div>
  );
}

OrderDetailTable.propTypes = {
  detailsOrder: PropTypes.objectOf().isRequired,
};

export default OrderDetailTable;
