import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import HomePage from './HomePage';
import Header from './Header';
import Navigation from './components/Navigation';
import TermsConds from './components/Terms&Conds';
import AUS from './components/AboutUS';
import Privacy from './components/PrivacyPolicies';
import ReturnRefund from './components/Return&Refund';
import ProductDetail from './components/ProductDetail';
import LoginSignup from './components/LoginSignup';
import Cart from './components/Cart';
import Account from './components/Account';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="{`/product/${item.id}`}" element={<ProductDetail />} />
          <Route path="/about-us" element={<AUS />} />
          <Route path="/terms-conditions" element={<TermsConds />} />
          <Route path="/privacy-policies" element={<Privacy />} />
          <Route path="/return-refund-policies" element={<ReturnRefund />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
