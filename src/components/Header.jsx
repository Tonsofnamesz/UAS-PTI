import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../pics/Thumbnails/Search.png';
import CartIcon from '../pics/Thumbnails/cart.png';
import logosmall from '../pics/Thumbnails/LogoSmall.png';

const Header = () => (
  <header className="mainheader">
    <div className="leftSideContainer">
      <img src={logosmall} alt="logo" className="logo" />
      <button className="signup">
        <Link to="/signup">Register/Login</Link>
      </button>
      <button className="account">
      <Link to="/account">Account</Link>
      </button>
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
        <Link to="/cart">
          <button className="cart-button">
            <img src={CartIcon} alt="Cart" />
            <span className="cart-text">Cart</span>
          </button>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;