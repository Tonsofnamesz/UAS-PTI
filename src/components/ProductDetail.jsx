import React, { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'; // Add this line
import { addToCart } from '../store';
import '../Products.css';
import Footer from "../Footer";
import Navigation from './Navigation';
import Header from './Header';


const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch(); // Add this line
  const [product, setProduct] = useState(location.state ? location.state.product : null);

  useEffect(() => {
    if (!product) {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id, product]);

  const handleAddToCart = () => { // Add this function
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="headerContainer">
          <Header />
        </div>
      <div className="secondHeaderContainer">
          <Navigation />
        </div>
      <div className="productDetail" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      marginTop:  '100px'
    }}>
      <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px'}} /> {/*  */}
      <h2 style={{fontSize: '30px'}} >{product.title}</h2>
      <p style={{ color: 'white', fontSize: '22px'}}>{product.description}</p> {/* */}
      <p style={{ color: 'white', fontSize: '22px'}}>Price: ${product.price}</p>
      <button onClick={handleAddToCart} style={{
      fontSize: '20px',
      borderRadius: '12px',
      backgroundColor: 'white',
      color: 'black',
      padding: '10px 20px',
      textDecoration: 'none' // Add this line
    }}
    onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} // Add this line
    onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'} // Add this line
    >Add to Cart</button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
