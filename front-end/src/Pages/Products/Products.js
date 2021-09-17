import React from 'react';
import NavBar from '../../Components/newComponents/NabBar/index';
import CartButton from '../../Components/newComponents/CartButton/index';
import ProductList from '../../Components/newComponents/ProductList';
import './style.css';

function Products() {
  return (
    <div className="products-page">
      <NavBar />
      <ProductList />
      <CartButton />
    </div>
  );
}

export default Products;
