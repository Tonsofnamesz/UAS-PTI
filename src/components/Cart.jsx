import React from "react";
import { useSelector } from 'react-redux'; // Import useSelector
import { Link } from 'react-router-dom';

const Cart  = () => {
  const cart = useSelector(state => state.product.cart); // Access cart state from productSlice

  return (
    <div className="Cart">
      <h1>Your Cart</h1>
      {/* Map over the cart state and display product details */}
      {cart.map((product, index) => (
        <div key={index}>
          <h2>{product.title}</h2>
          <p>ID: {product.id}</p>
          <p>Price: ${product.price}</p>
          <Link to={`/product/${product.id}`}>Go to Product Detail</Link>
        </div>
      ))}
      <Link to="/product/:id">Go to Product Detail</Link>
    </div>
  )
}

export default Cart;
