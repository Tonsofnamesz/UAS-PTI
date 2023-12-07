import React from "react";
import '../AboutUs.css';
import RyanPic from '../pics/Thumbnails/The Unknown.jpg';

const AUS  = () => {
    return (
        <div className="AboutUS">
            <h1>About Us</h1>
            <div className="aboutUsContainer">
                <img src={RyanPic} className="aboutUsImage" />
                <div className="aboutUsInfo">
                    <h2 className="aboutUsName">Jonathan Ryan R.</h2>
                    <p className="aboutUsDescription">Tukang Sabun</p>
                    <p className="aboutUsQuote">PIPEBOMB</p>
                </div>
            </div>
            <div className="aboutUsContainer">
                <img src={""} className="aboutUsImage" />
                <div className="aboutUsInfo">
                    <h2 className="aboutUsName">Matthew Sebastian Kusnandar</h2>
                    <p className="aboutUsDescription">Tukang Sabun</p>
                    <p className="aboutUsQuote">PIPEBOMB</p>
                </div>
            </div>
        </div>
    )
}

export default AUS;