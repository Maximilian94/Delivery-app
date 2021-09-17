import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../services/api';
import ProductCard from '../productCard';
import './style.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      const productsList = await getProducts(userInfo.token);
      setProducts(productsList);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-div">
      <div className="products-div-title">
        <span>Escolha sua bebida</span>
      </div>
      <div className="products-list">
        { products.length > 0
          && products.map((prod) => <ProductCard product={ prod } key={ prod.id } />) }
      </div>
    </div>
  );
}

export default ProductList;
