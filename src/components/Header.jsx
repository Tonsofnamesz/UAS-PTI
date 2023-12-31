import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '../pics/Thumbnails/Search.png';
import logosmall from '../pics/Thumbnails/griffin_logo.png';
import '../Header.css';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${searchInput}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="mainheader">
      <div className="leftSideContainer">
        <img src={logosmall} alt="Logo" className="logo" />
        <Link to="/signup" className="signup">
          <div>Sign Up/Register</div>
        </Link>
        <Link to="/account" className="account">
          <div>Account</div>
        </Link>
      </div>
      <div className="rightSideContainer">
        <div className="search-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={handleSearchInputChange}
              onKeyPress={handleKeyPress}
            />
            <button className="search-button" onClick={handleSearch}>
              <img src={SearchIcon} alt="Search" />
            </button>
          </div>
        </div>
        <Link to="/cart" className="cart-button">
          <button>Cart</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

