import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import './App.css';
import Footer from './Footer';
import HomePage from './HomePage';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TermsConds from './components/Terms&Conds';
import AUS from './components/AboutUS';
import Privacy from './components/PrivacyPolicies';
import ReturnRefund from './components/Return&Refund';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'; 

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Provider store={store}> {/* Wrap your application with Provider */}
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage handleAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductDetail handleAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/about-us" element={<AUS />} />
            <Route path="/terms-conditions" element={<TermsConds />} />
            <Route path="/privacy-policies" element={<Privacy />} />
            <Route path="/return-refund-policies" element={<ReturnRefund />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
