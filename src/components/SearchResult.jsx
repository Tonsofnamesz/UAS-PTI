import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from '../Footer';
import '../SearchResult.css';

const SearchResults = () => {
  const { query } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const filteredItems = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        setItems(filteredItems);
      });
  }, [query]);

  return (
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="secondHeaderContainer">
        <Navigation />
      </div>
      <div className="Title">
        <h1>Results</h1>
      </div>
      <div className="itemCardContainer">
        {items.map((item) => (
          <Link
            to={{
              pathname: `/product/${item.id}`,
              state: { product: item }
            }}
            key={item.id}
            className="itemCard"
          >
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;

