import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => (
  <header className="secondSmallerHeader">
    <button>
    <Link to="/">Home</Link>
    </button>
    <button>
      <Link to="/all">All</Link>
    </button>
  </header>
);

export default Navigation;