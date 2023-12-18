import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addOrder, clearCart } from '../store';
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
  const [message, setMessage] = useState('');

  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!nominal) {
      setMessage('Balance is not inserted!');
      return;
    }

    if (!Number.isInteger(Number(nominal))) {
      setMessage('Invalid Nominal');
      return;
    }

    if (parseFloat(nominal) < totalPrice) {
      setMessage('Nominal is insufficient!');
      return;
    }

    dispatch(addOrder());
    dispatch(clearCart());
    setMessage('Payment successful!');
  };

  return (
    <div>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="secondHeaderContainer">
        <Navigation />
      </div>
      <div className="PaymentContainer">
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
        {message && <div className="paymentMessage">{message}</div>}
      </div>
      <Footer />
    </div>
  );
};

export default Payment;



