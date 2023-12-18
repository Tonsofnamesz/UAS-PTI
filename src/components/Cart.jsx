import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, decrementQuantity, incrementQuantity} from '../store'; 
import Footer from "../Footer";
import Navigation from './Navigation';
import Header from './Header';
import '../Cart.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart); 
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handleRemoveFromCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart.quantity > 1) {
      // If the item quantity is more than 1, decrement the quantity
      dispatch(decrementQuantity(product));
    } else {
      // If the item quantity is 1, remove the item from the cart
      dispatch(removeFromCart(product));
    }
  };
  

  const handleCheckout = () => {
    // Navigate to the Payment component with totalPrice as state
    navigate('/payment', { state: { totalPrice } });
  };

  return (
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="secondHeaderContainer">
        <Navigation />
      </div>
      <div className="cart">
        <h1>Your Cart</h1>
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-id">ID: {product.id}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-quantity">Quantity: {product.quantity}</p>
          <div className="button-container">
            <button onClick={() => dispatch(incrementQuantity(product))} className="add-button remove-button">Add</button>
            <button onClick={() => handleRemoveFromCart(product)} className="remove-button">Remove</button>
          </div>
          <Link to={`/product/${product.id}`} className="product-detail-link">Go to Product Detail</Link>
        </div>        
        ))}
        <div className="total-price">
          <h2>Total Price: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</h2>
        </div>
        <div className="checkout-button">
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
