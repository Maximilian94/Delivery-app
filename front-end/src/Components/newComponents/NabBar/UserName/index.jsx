import React from 'react';

const userNameDivStyle = {
  padding: '10px 5px',
  display: 'flex',
};

const userName = {
  backgroundColor: '#ea7c69',
  color: 'white',
  borderRadius: '12px',
  padding: '5px',
  margin: '0 20px',
  display: 'flex',
  alignItems: 'center',
};

function UserName() {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  return (
    <div style={ userNameDivStyle }>
      <div
        style={ userName }
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <span>{ userInfo.name }</span>
      </div>
    </div>
  );
}

export default UserName;
