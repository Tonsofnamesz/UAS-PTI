import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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


function App() {
  return (
    <div className="App">
      <div className="headerContainer">
          <Header />
        </div>
        <div className="secondHeaderContainer">
          <Navigation />
        </div>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="{`/product/${item.id}`}" element={<ProductDetail />} />
          <Route path="/about-us" element={<AUS />} />
          <Route path="/terms-conditions" element={<TermsConds />} />
          <Route path="/privacy-policies" element={<Privacy />} />
          <Route path="/return-refund-policies" element={<ReturnRefund />} />
        </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
