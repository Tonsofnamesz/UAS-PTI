import React, { useState } from "react";
import profilePic from '../pics/Thumbnails/blank-profile-pic.png';
import CartIcon from '../pics/Thumbnails/cart.png';
import '../Account.css';
import Header from '../Header';
import Navigation from './Navigation';
import Footer from '../Footer';


const Account = () => {
    return (
        <div>
          <div className="Account">
            <div className="headerContainer">
              <Header />
            </div>
            <div className="secondHeaderContainer">
              <Navigation />
            </div>
            <div className="ProfileContainerTopLeft">
              <img src={profilePic} className="pfp" />
              <h1>user'sn name from localstorage</h1>
            </div>
            <div className="NavbarBelowProfileContainerLeft">

            </div>
            <div className="NavContentsContainerRight">

            </div>
          </div>
          <Footer />
        </div>
    );
  };
  
  export default Account;

  