import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Link } from 'react-router-dom';
import Visa from '../pics/Thumbnails/VISA.png';
import MasterCard from '../pics/Thumbnails/MasterCard.png';
import '../Payment.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from '../Footer';

const Payment = () => {
  const [cardType, setCardType] = useState(''); 
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [nominal, setNominal] = useState('');

  const totalPrice = useSelector((state) => state.totalPrice);
  // State to manage payment success
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Handle payment button click
  const handlePayment = () => {
    // Check if nominal is enough
    if (parseFloat(nominal) < totalPrice) {
      alert('Nominal is not enough!');
      return;
    }
    // Implement payment logic here (e.g., show success message, clear cart, etc.)
    setPaymentSuccess(true);
  };

  return (
    <div>
      <Header />
      <div>
        <Navigation />
      </div>
      <div className="PaymentContainer">
        <div className="TopPart">
          <h1>KepplerPay</h1>
        </div>
        <div className="List">
          <h2>Payment Amount: ${totalPrice.toFixed(2)}</h2>
        </div>
        <div className="SelectorPembayaran">
          <h2>Card Type</h2>
          <div className="VisaMasterCardSelector">
            <img
              src={Visa}
              alt="VISA"
              onClick={() => setCardType('VISA')}
              className={cardType === 'VISA' ? 'selected' : ''}
            />
            <img
              src={MasterCard}
              alt="MasterCard"
              onClick={() => setCardType('MasterCard')}
              className={cardType === 'MasterCard' ? 'selected' : ''}
            />
          </div>
        </div>
        <div className="CardDetails">
          <div className="inputColumn">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="inputColumn">
            <label htmlFor="expiryMonth">Expiry Month:</label>
            <input
              type="text"
              id="expiryMonth"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
          </div>
          <div className="inputColumn">
            <label htmlFor="expiryYear">Expiry Year:</label>
            <input
              type="text"
              id="expiryYear"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            />
          </div>
          <div className="inputColumn">
            <label htmlFor="cvc">CVC:</label>
            <input
              type="text"
              id="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
        <div className="NominalInput">
          <label htmlFor="nominal">Input Nominal:</label>
          <input
            type="text"
            id="nominal"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
        </div>
        <div className="payButton">
          <button onClick={handlePayment}>PAY</button>
        </div>
      </div>

      {/* Display success message and redirect if payment is successful */}
      {paymentSuccess && (
        <div className="successMessage">
          <h2>Payment Successful!</h2>
          <p>Redirecting to Homepage...</p>
          <Link to="/">Go to Homepage</Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Payment;


