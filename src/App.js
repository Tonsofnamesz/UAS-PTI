import { useEffect, useState} from "react";
import './App.css';
import CartIcon from './pics/Thumbnails/cart.png';
import SearchIcon from './pics/Thumbnails/Search.png';
import logo from './pics/Thumbnails/LogoWhole.png';
import logosmall from './pics/Thumbnails/LogoSmall.png';

function App() {

  const [previewFeutItems, setPreviewFeutItems] = useState([]);
  const [previewReccItems, setPreviewReccItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const shuffledItems = data.sort(() => 0.5 - Math.random());
      const previewFeutItems = shuffledItems.slice(0, 5);
      const previewReccItems = shuffledItems.slice(5, 10); 
      setPreviewFeutItems(previewFeutItems);
      setPreviewReccItems(previewReccItems)
    });
  };

  return (
    <div className="App">
      <div className="Stuffs">
        <div className="headerContainer">
          <header className="mainheader">
            <div className="leftSideContainer">
              <img src={logosmall} alt="logo" className="logo" />
              <button className="signup">Sign Up/Register</button>
            </div>
            <div className="rightSideContainer">
              <div className="search-container">
                <div className="search-bar">
                  <input type="text" placeholder="Search products..." />
                  <button className="search-button">
                    <img src={SearchIcon} alt="Search" />
                  </button>
                </div>
              </div>
              <div className="cart-container">
                <button className="cart-button">
                  <img src={CartIcon} alt="Cart" />
                  <span className="cart-text">Cart</span>
                </button>
              </div>
            </div>
          </header>
        </div>
        <div className="secondHeaderContainer">
          <header className="secondSmallerHeader">
          <button>All</button>
          <button>Today's Deals</button>
          <button>Customer Service</button>
          <button>Sell</button>
        </header>
        </div>
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
          <div className="AllPreview">All</div>
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
      </div>
    </div>
    </div>
  );
}


export default App;
