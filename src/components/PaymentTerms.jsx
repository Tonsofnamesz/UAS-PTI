import React from "react";
import '../AboutUs.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from '../Footer';
import Visa from '../pics/Thumbnails/VISA.png';
import MasterCard from '../pics/Thumbnails/MasterCard.png';
import '../PaymentTerms.css';

const PaymentTerms = () => {
    return (
        <div>
            <div className="headerContainer">
                <Header />
            </div>
            <div className="secondHeaderContainer">
                <Navigation />
            </div>
            <div className="MainContentContainer">
                <h1>Pay with Credit/Debit Card</h1>
                <p>The available credit/debit card options are listed below.</p>
                <div className="cardPics">
                    <img src={Visa}></img>
                    <img src={MasterCard}></img>
                </div>
                <p>Please note INVENIRE GRIFFON does not collect your credit/debit card number or personal information when you make a payment. For questions regarding your transactions on our site, please consult your card-issuing bank for information.</p>
            </div>
            <Footer />
        </div>
    )
}

export default PaymentTerms;