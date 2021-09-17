import React, { useState, useEffect } from 'react';
import { getCostumerOrders } from '../services/api';
import NavBar from '../Components/newComponents/NabBar';
import CardCostumerOrder from '../Components/newComponents/CardCustumerOrder';

function CustomerOrders() {
  const [listOrders, setListOrders] = useState([]);

  const fetchAllOrders = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const productsList = await getCostumerOrders(token);
    setListOrders(productsList);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  function mountList() {
    const { email } = JSON.parse(localStorage.getItem('user'));
    console.log(listOrders);

    const selectOrders = listOrders.filter((order) => order.user.email === email);

    return (
      <div>
        {selectOrders.map(
          (order) => <CardCostumerOrder selectOrder={ order } key={ order.id } />,
        )}
      </div>
    );
  }

  return (
    <>
      <NavBar />
      { mountList() }
    </>
  );
}

export default CustomerOrders;
