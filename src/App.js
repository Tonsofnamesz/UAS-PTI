import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { addToCart } from './store';
import './App.css';
import HomePage from './HomePage';
import TermsConds from './components/Terms&Conds';
import AUS from './components/AboutUS';
import Privacy from './components/PrivacyPolicies';
import ReturnRefund from './components/Return&Refund';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'; 
import Account from './components/Account';
import LoginSignup from './components/LoginSignup';
import ContactForm from './components/ContactUs';
import Payment from './components/Payment';
import AllPage from './components/AllPage';
import PaymentTerms from './components/PaymentTerms';
import SearchResults from './components/SearchResult';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/signup" element={<LoginSignup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/all" element={<AllPage />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/payment-terms" element={<PaymentTerms />} />
            <Route path="/about-us" element={<AUS />} />
            <Route path="/terms-conditions" element={<TermsConds />} />
            <Route path="/privacy-policies" element={<Privacy />} />
            <Route path="/return-refund-policies" element={<ReturnRefund />} />
            <Route path="/contact-us" element={<ContactForm />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/search/:query" element={<SearchResults />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
