import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const { query } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch all products when the component mounts
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        // Filter products that match the search query and update state
        const filteredItems = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        setItems(filteredItems);
      });
  }, [query]);  

  return (
    <div className="itemCardContainer">
      {items.map((item) => (
        <Link to={{
          pathname: `/product/${item.id}`,
          state: { product: item }
        }} key={item.id} className="itemCard">
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
