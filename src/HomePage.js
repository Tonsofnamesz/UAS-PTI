import { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './pics/Thumbnails/LogoWhole.png';
import ProductDetail from "./components/ProductDetail";
import ElementAboveFeatured from './pics/Background_Imgs/vectoraboveitems.png';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './Footer';

export const HomePage = () => {
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [previewFeutItems, setPreviewFeutItems] = useState([]);
  const [previewReccItems, setPreviewReccItems] = useState([]);
  const [previewAllItems, setPreviewAllItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      const shuffledItems = data.sort(() => 0.5 - Math.random());
      const previewFeutItems = shuffledItems.slice(0, 6);
      const previewReccItems = shuffledItems.slice(6, 12);
      const previewAllItems = shuffledItems.slice(12, 18);
      
      setPreviewFeutItems(previewFeutItems);
      setPreviewReccItems(previewReccItems);
      setPreviewAllItems(previewAllItems);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
 };

 const handleProductClick = (product) => {
  setSelectedProduct(product);
};

const renderProductItems = (items) => {
  return items.map((item) => (
    <Link to={`/product/${item.id}`} key={item.id} className="itemCard">
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <p>Price: ${item.price}</p>
    </Link>
  ));
};

  return (
    <div>    
    <div className="Stuffs">
      </div>
      <div className="headerContainer">
          <Header />
        </div>
      <div className="secondHeaderContainer">
          <Navigation />
        </div>
      <div className="content">
        <div className="background-section">
          <div className="background-left"></div>
          <div className="background-right"></div>
        </div>
        <div className="ElementAboveFeatured">
          <img src={ElementAboveFeatured}></img>
        </div>
        <div className="Featured">Featured</div>
        <div className="itemCardContainer">
        {previewFeutItems.map((item) => (
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
        <div className="ElementAboveFeatured">
          <img src={ElementAboveFeatured}></img>
        </div>
        <div className="Recommended">Recommended</div>
          <div className="itemCardContainer">
            {previewReccItems.map((item) => (
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
        <div className="ElementAboveFeatured">
          <img src={ElementAboveFeatured}></img>
        </div>
          <div className="AllPreview">Today's Deals</div>
          <div className="itemCardContainer">
            {previewAllItems.map((item) => (
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
            <Footer />
        </div>
    </div>
  );
};

export default HomePage;