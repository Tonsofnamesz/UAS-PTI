import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { removeFromCart } from '../store'; 
import Footer from "../Footer";
import Navigation from './Navigation';
import Header from './Header';
import '../Cart.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart); 
  const dispatch = useDispatch(); 

  const handleRemoveFromCart = (product) => { 
    dispatch(removeFromCart(product));
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="secondHeaderContainer">
        <Navigation />
      </div>
      <div className="Cart" style={{ marginTop: '115px' }}>
        <h1>Your Cart</h1>
        {cart.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <h2>{product.title}</h2>
            <p>ID: {product.id}</p>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>Go to Product Detail</Link>
            <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
          </div>
        ))}
        <div>
          <h2>Total Price: ${totalPrice}</h2>
        </div>
        <div className="CheckoutButton">
          <Link to="/payment">Checkout</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;

