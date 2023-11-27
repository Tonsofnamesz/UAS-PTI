import React from 'react';
import './App.css';
import CartIcon from './pics/Thumbnails/cart.png';
import SearchIcon from './pics/Thumbnails/Search.png';
import logo from './pics/Thumbnails/placeholder.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">LOGO HERE</div>
        <div className="nav">
          <button className="signup">Sign Up/Register</button>
          <div className="search-container">
            <div className="search-bar">
              <input type="text" placeholder="Search products..." />
              <button className="search-button">
                <img src={SearchIcon} alt="Search" />
              </button>
            </div>
          </div>
          <div className="cart-container">
            <button className="cart-button">
              <img src={CartIcon} alt="Cart" />
              <span className="cart-text">Cart</span>
            </button>
          </div>
        </div>
      </header>
      <div className="content">
        <section className="background-section">
          <div className="background-left"></div>
          <div className="background-middle">
            <img src={logo} alt="WIP Big Logo" />
          </div>
          <div className="background-right"></div>
        </section>
      </div>
    </div>
  );
}


export default App;
