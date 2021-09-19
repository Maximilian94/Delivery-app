import React from 'react';
import PropTypes from 'prop-types';

import SendOrderButton from './SendOrderButton';
import PrepareOrderButton from './PrepareOrderButton';

function OrderDetailTable(props) {
  const { detailsOrder } = props;

  const orderStatusColor = () => {
    if (!detailsOrder) return;
    if (detailsOrder.status === 'Pendente') return 'pending';
  };
  const orderDivHeader = () => (
    <div className="order-details-div-header">
      <div className="order-details-div-header-colum">
        <div>Pedido 01</div>
        <div>02/04/2020</div>
      </div>
      <div className="order-details-div-header-colum">
        <div className={ `order-status ${orderStatusColor()}` }>Pendente</div>
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
