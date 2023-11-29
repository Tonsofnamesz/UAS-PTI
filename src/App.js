import React from 'react';
import './App.css';
import CartIcon from './pics/Thumbnails/cart.png';
import SearchIcon from './pics/Thumbnails/Search.png';
import logo from './pics/Thumbnails/LogoWhole.png';
import logosmall from './pics/Thumbnails/LogoSmall.png';

function App() {
  return (
    <div className="App">
      <div className="Stuffs">
        <div className="headerContainer">
          <header className="mainheader">
            <div className="leftSideContainer">
              <img src={logosmall} alt="logo" className="logo" />
              <button className="signup">Sign Up/Register</button>
            </div>
            <div className="rightSideContainer">
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
        </div>
        <div className="secondHeaderContainer">
          <header className="secondSmallerHeader">
          <button>All</button>
          <button>Today's Deals</button>
          <button>Customer Service</button>
          <button>Sell</button>
        </header>
        </div>
      </div>
      <div className="content">
        <section className="background-section">
          <div className="background-left"></div>
          <div className="background-middle">
            <img src={logo} alt="Big_Logo" style={{ width: '350px', height: 'auto' }}/>
          </div>
          <div className="background-right"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
