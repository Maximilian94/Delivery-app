import React from 'react';
import PropTypes from 'prop-types';

import SendOrderButton from './SendOrderButton';
import PrepareOrderButton from './PrepareOrderButton';

function OrderDetailTable(props) {
  const { detailsOrder = [] } = props;

  const orderStatusColor = () => {
    if (!detailsOrder) return;
    if (detailsOrder.status === 'Pendente') return 'pending';
    if (detailsOrder.status === 'Preparando') return 'preparing';
    if (detailsOrder.status === 'Em Trânsito') return 'transit';
  };
  const orderDivHeader = () => (
    <div className="order-details-div-header">
      <div className="order-details-div-header-colum">
        <div><span>{`Pedido ${detailsOrder.id}`}</span></div>
        <div>02/04/2020</div>
      </div>
      <div className="order-details-div-header-colum">
        <div className={ `order-status ${orderStatusColor()}` }>
          <span>{ detailsOrder.status }</span>
        </div>
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
