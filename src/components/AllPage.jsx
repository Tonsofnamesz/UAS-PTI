import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../AllPage.css';
import Footer from "../Footer";
import Navigation from './Navigation';
import Header from './Header';

const AllPage = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="secondHeaderContainer">
        <Navigation />
      </div>
      <div className="products-header">
        <h1>Products</h1>
      </div>
      <div className="all-products-container">
        {allProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="itemCard">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllPage;
