import { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import logo from './pics/Thumbnails/LogoWhole.png';
import ProductDetail from "./components/ProductDetail";

export const HomePage = () => {
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [previewFeutItems, setPreviewFeutItems] = useState([]);
  const [previewReccItems, setPreviewReccItems] = useState([]);
  const [previewAllItems, setPreviewAllItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        const shuffledItems = data.sort(() => 0.5 - Math.random());
        const previewFeutItems = shuffledItems.slice(0, 5);
        const previewReccItems = shuffledItems.slice(5, 10);
        const previewAllItems = shuffledItems.slice(10, 15);
        
        setPreviewFeutItems(previewFeutItems);
        setPreviewReccItems(previewReccItems);
        setPreviewAllItems(previewAllItems);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    // Add the selected product to the cart
    setCart([...cart, product]);
  };

  return (

    <div>    
    <div className="Stuffs">
      </div>
      <div className="content">
        <div className="background-section">
          <div className="background-left"></div>
          <div className="background-middle">
            <img src={logo} alt="Big_Logo" style={{ width: '350px', height: 'auto' }}/>
          </div>
          <div className="background-right"></div>
        </div>
        <div className="featured">Featured</div>
        <div className="itemCardContainer">
        {previewFeutItems.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="itemCard" onClick={() => handleProductClick(item)}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
          </Link>
            ))}
            <div>
            {selectedProduct && <ProductDetail product={selectedProduct} />}
            </div>
            <div className="showAllButton">
              <button>All</button>
            </div>
        </div>
        <div className="Recommended">Recommended For You!</div>
        <div className="itemCardContainer">
          {previewReccItems.map((item) => (
              <div key={item.id} className="itemCard">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
            <div className="showAllButton">
              <button>All</button>
            </div>
            </div>
          <div className="AllPreview">Today's Deals</div>
          <div className="itemCardContainer">
          {previewAllItems.map((item) => (
              <div key={item.id} className="itemCard">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
            <div className="showAllButton">
              <button>All</button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default HomePage;