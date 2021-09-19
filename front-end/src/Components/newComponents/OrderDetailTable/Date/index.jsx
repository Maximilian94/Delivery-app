import React from 'react';
import PropTypes from 'prop-types';

function Date(props) {
  const { date } = props;
  return (
    <div>{date}</div>
  );
}

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
