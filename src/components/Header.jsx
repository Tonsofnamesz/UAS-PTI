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
    // Redirect to the SearchResults page with the search query
    navigate(`/search/${searchInput}`);
  };

  const handleKeyPress = (event) => {
    // Redirect on pressing Enter key
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="mainheader">
      <div className="leftSideContainer">
        <img src={logosmall} alt="logo" className="logo" />
        <Link to="/signup" className="signup">Sign Up/Register</Link>
        <Link to="/account" className="account">Account</Link>
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
        <div className="cart-container">
          <Link to="/cart" className="cart-button">
            <span className="cart-text">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
