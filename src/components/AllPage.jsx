import React from 'react';
import Footer from "../Footer";
import Navigation from './Navigation';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../AllPage.css';

const AllPage = ({ allProducts }) => {
    return (
        <div>
            <div className="headerContainer">
                <Header />
            </div>
            <div className="secondHeaderContainer">
                <Navigation />
            </div>
            <div className="all-products-container">
                {renderProductItems(allProducts)}
            </div>
            <Footer />
        </div>
    )
}

const renderProductItems = (items) => {
    if (!items || !items.length) {
      return <p>No products available</p>;
    }
  
    return items.map((item) => (
      <Link to={`/product/${item.id}`} key={item.id} className="itemCard">
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
        <p>Price: ${item.price}</p>
      </Link>
    ));
  };
  

export default AllPage;
