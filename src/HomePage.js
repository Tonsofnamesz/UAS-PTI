import { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import ElementAboveFeatured from './pics/Background_Imgs/vectoraboveitems.png';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './Footer';
import { AllPage } from './components/AllPage';
import MainLogo from './pics/Thumbnails/griffin_logo.png';

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

  const renderProductItems = (items) => {
    return items.map((item) => (
      <Link to={`/product/${item.id}`} key={item.id} className="itemCard">
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
        <p>Price: ${item.price}</p>
      </Link>
    ));
  };

  // Render all products instantly when the component mounts
  useEffect(() => {
    renderProductItems(previewAllItems);
  }, [previewAllItems]);

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
          <img src={MainLogo} />
          <div className="business-name">
            <h1>INVENIRE</h1>
            <h1>GRIFFON</h1>
          </div>
        </div>
        <hr class="thick-line" />
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
        <hr class="thick-line" />
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
        <hr class="thick-line" />
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