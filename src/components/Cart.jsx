import React from "react";
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { Link } from 'react-router-dom';
import { removeFromCart } from '../store'; // Import removeFromCart
import Footer from "../Footer";
import Navigation from './Navigation';
import Header from './Header';

const Cart  = () => {
  const cart = useSelector((state) => state.cart); // Access cart state from productSlice
  const dispatch = useDispatch(); // Add this line

  const handleRemoveFromCart = (product) => { // Add this function
    dispatch(removeFromCart(product));
  };

  return (
    <div>
       <div className="headerContainer">
          <Header />
        </div>
      <div className="secondHeaderContainer">
          <Navigation />
        </div>
      <div className="Cart" style = {{marginTop: '115px'}}>
      <h1>Your Cart</h1>
      {/* Map over the cart state and display product details */}
      {cart.map((product, index) => (
        <div key={index}>
          <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px'}} />
          <h2>{product.title}</h2>
          <p>ID: {product.id}</p>
          <p>Price: ${product.price}</p>
          <Link to={`/product/${product.id}`}>Go to Product Detail</Link>
          <button onClick={() => handleRemoveFromCart(product)}>Remove</button> {/* Add this line */}
        </div>
      ))}
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
