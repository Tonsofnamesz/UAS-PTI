import React, { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';
import '../Products.css';
import Footer from "../Footer";
import Navigation from './Navigation';
import Header from './Header';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(location.state ? location.state.product : null);
  const [isAdded, setIsAdded] = useState(false);
  const [previewAllItems, setPreviewAllItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      const shuffledItems = data.sort(() => 0.5 - Math.random());
      const previewAllItems = shuffledItems.slice(12, 18);

      setPreviewAllItems(previewAllItems);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setIsAdded(false);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]); 
  

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const renderProductItems = (items) => {
    return items.map((item) => (
      <Link 
        to={`/product/${item.id}`} 
        key={item.id} 
        className="itemCard"
        onClick={() => window.scrollTo(0, 0)}  // Add this line
      >
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
        <p>Price: ${item.price}</p>
      </Link>
    ));
  };   

  return (
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="secondHeaderContainer">
        <Navigation />
      </div>
      <div className="productDetail" style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        marginTop: '100px'
      }}>
        <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px'}} />
        <h2 style={{ fontSize: '30px' }}>{product.title}</h2>
        <p style={{ color: 'white', fontSize: '22px' }}>{product.description}</p>
        <p style={{ color: 'white', fontSize: '22px' }}>Price: ${product.price}</p>
        <button onClick={handleAddToCart} style={{
          fontSize: '20px',
          borderRadius: '15px',
          background: 'linear-gradient(to bottom, #000611, #06132a)',
          color: 'white',
          padding: '10px 20px',
          textDecoration: 'none',
          border: '2px solid #00c6ff',
          transition: 'transform 0.3s ease-in-out'
        }}
          onMouseOver={(e) => {
            e.currentTarget.style.textDecoration = 'none';
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.textDecoration = 'none';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >Add to Cart</button>
        <div style={{ height: '20px' }}></div>
        {isAdded && <p style={{ color: 'white', fontSize: '22px' }}>Item successfully added!</p>}
        <div style={{ height: '20px' }}></div>
        <div className="relatedItems">
      {renderProductItems(previewAllItems)}
    </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
