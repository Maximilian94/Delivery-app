import React from 'react';
import PropTypes from 'prop-types';

const dataTestId = 'seller_order_details__element-order-details-label-order-date';

function Date(props) {
  const { date } = props;
  return (
    <div data-testid={ dataTestId }>{date}</div>
  );
}

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
