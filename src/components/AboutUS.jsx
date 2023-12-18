import React from "react";
import '../AboutUs.css';
import RyanPic from '../pics/Thumbnails/The Unknown.jpg';
import MatthewPic from '../pics/Thumbnails/Matthew.png';
import AditPic from '../pics/Thumbnails/Adit.jpg';
import DuncanPic from '../pics/Thumbnails/Duncan.jpg';
import DarrylPic from '../pics/Background_Imgs/cat-war.gif';
import Header from './Header';
import Navigation from './Navigation';
import Footer from '../Footer';

const AUS  = () => {
    return (
        <div className="AboutUS">
            <div className="headerContainer">
          <Header />
        </div>
      <div className="secondHeaderContainer">
          <Navigation />
        </div>
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
                <img src={MatthewPic} className="aboutUsImage" />
                <div className="aboutUsInfo">
                    <h2 className="aboutUsName">Matthew Sebastian Kusnandar</h2>
                    <p className="aboutUsDescription">Tukang Sabun</p>
                    <p className="aboutUsQuote">PIPEBOMB</p>
                </div>
            </div>
            <div className="aboutUsContainer">
                <img src={DarrylPic} className="aboutUsImage" />
                <div className="aboutUsInfo">
                    <h2 className="aboutUsName">Darryl Pratama</h2>
                    <p className="aboutUsDescription">Tukang Sabun</p>
                    <p className="aboutUsQuote">PIPEBOMB</p>
                </div>
            </div>
            <div className="aboutUsContainer">
                <img src={DuncanPic} className="aboutUsImage" />
                <div className="aboutUsInfo">
                    <h2 className="aboutUsName">Duncan Carellius</h2>
                    <p className="aboutUsDescription">Tukang Sabun</p>
                    <p className="aboutUsQuote">PIPEBOMB</p>
                </div>
            </div>
            <div className="aboutUsContainer">
                <img src={AditPic} className="aboutUsImage" />
                <div className="aboutUsInfo">
                    <h2 className="aboutUsName">Aditya Putra Sabrina</h2>
                    <p className="aboutUsDescription">Tukang Sabun</p>
                    <p className="aboutUsQuote">PIPEBOMB</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AUS;