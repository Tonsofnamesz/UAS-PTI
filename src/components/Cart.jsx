import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, decrementQuantity} from '../store'; 
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
      <div className="Cart" style={{ marginTop: '115px' }}>
        <h1>Your Cart</h1>
        {cart.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <h2>{product.title}</h2>
            <p>ID: {product.id}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <Link to={`/product/${product.id}`}>Go to Product Detail</Link>
            <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
          </div>
        ))}
        <div>
        <h2>Total Price: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</h2>
        </div>
        <div className="CheckoutButton">
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
