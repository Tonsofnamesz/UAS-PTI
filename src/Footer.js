import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
  <footer>
  <div>
    <h2>Our Company</h2>
    <ul>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
      <li><Link to="/privacy-policies">Privacy Policies</Link></li>
    </ul>
  </div>
  <div>
    <h2>Support</h2>
    <ul>
      <li><Link to="/return-refund-policies">Return & Refund Policies</Link></li>
      <li><a href="/contact-us">Contact Us</a></li>
      <li><a href="/customer-help">Customer Help</a></li>
    </ul>
  </div>
  <div>
    <h2>Contact</h2>
    <p>123 Main Street, Cityville, Country</p>
  </div>
</footer>
<div className="copyright">
        <p>2023 Invenire Griffon. All rights reserved.</p>
      </div>
  </div>

);
  
  export default Footer;