import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../../../../services/functions';

import SendOrderButton from './SendOrderButton';
import PrepareOrderButton from './PrepareOrderButton';
import ReceivedButton from './ReceivedButton';
import OrderId from './OrderId';
import Date from './Date';
import Status from './Status';

import './style.css';

function divHeader(props) {
  const { detailsOrder = [] } = props;
  const { status, id, saleDate } = detailsOrder;
  const { role } = JSON.parse(localStorage.getItem('user'));

  const clientButtons = () => <ReceivedButton detailsOrder={ detailsOrder } />;
  const sellerButtons = () => (
    <>
      <PrepareOrderButton detailsOrder={ detailsOrder } />
      <SendOrderButton detailsOrder={ detailsOrder } />
    </>
  );

  const buttonsByUserRole = () => {
    if (role === 'customer') return clientButtons();
    if (role === 'seller') return sellerButtons();
  };

  return (
    <div className="order-details-div-header">
      <div className="order-details-div-header-colum">
        <OrderId id={ id } />
        <Date date={ formatDate(saleDate) } />
      </div>
      <div className="order-details-div-header-colum">
        <Status status={ status } />
      </div>
      <div className="order-details-div-header-colum">
        {buttonsByUserRole()}
      </div>
    </div>
  );
}

divHeader.propTypes = {
  detailsOrder: PropTypes.objectOf().isRequired,
};

export default divHeader;
