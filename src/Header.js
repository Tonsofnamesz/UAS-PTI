import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from './pics/Thumbnails/Search.png';
import CartIcon from './pics/Thumbnails/cart.png';
import logosmall from './pics/Thumbnails/LogoSmall.png';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const history = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    // Redirect to the All Product page with the search query
    history.push(`/all-products?search=${searchInput}`);
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
        {/* ... */}
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
        {/* ... */}
      </div>
    </header>
  );
};

export default Header;

