import React from 'react';
import './style.css';

function pageTitle(props) {
  return (
    <div className="page-title">
      {props.title}
    </div>
  );
}

export default pageTitle;
