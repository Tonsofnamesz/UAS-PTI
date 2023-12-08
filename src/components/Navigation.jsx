import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="secondSmallerHeader">
    <button>
      <Link to="/">Home</Link>
    </button>
    <button>All</button>
    <button>Today's Deals</button>
    <button>Sell</button>
  </header>
);

export default Navigation;