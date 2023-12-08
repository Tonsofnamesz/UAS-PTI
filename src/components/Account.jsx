import React, { useState } from "react";
import profilePic from '../pics/Thumbnails/blank-profile-pic.png'; // Replace with the actual path to your profile picture
import CartIcon from '../pics/Thumbnails/cart.png';
import '../Account.css';
import Header from '../Header';
import Navigation from './Navigation';
import Footer from '../Footer';


const Account = () => {
    const [wishlistVisible, setWishlistVisible] = useState(false);
    const [balanceVisible, setBalanceVisible] = useState(false);
    const [wishlistItems, setWishlistItems] = useState([""]);
    const [userBalance, setUserBalance] = useState(""); // State for user balance input
  
    const handleWishlistClick = () => {
      setWishlistVisible(!wishlistVisible);
      setBalanceVisible(false); // Close the balance dropdown if open
    };
  
    const handleBalanceClick = () => {
      setBalanceVisible(!balanceVisible);
      setWishlistVisible(false); // Close the wishlist dropdown if open
    };
  
    // Calculate the height of the main container dynamically based on dropdown visibility
    const mainContainerStyle = {
      height: wishlistVisible || balanceVisible ? "300px" : "150px", // Adjust the heights as needed
    };
  
    return (
        <div>
      <div className="Account">
         <div className="headerContainer">
          <Header />
        </div>
      <div className="secondHeaderContainer">
          <Navigation />
        </div>
        <div className="account-container" style={mainContainerStyle}>
          <div className="user-profile">
            <img src={profilePic} alt="Profile" />
            <span className="user-name">User's Name</span>
          </div>
          <div className="buttons-container">
            <button className="account-button" onClick={() => console.log("My Cart clicked")}>
              <img src={CartIcon} alt="Cart" />
              My Cart
            </button>
            <button className="account-button" onClick={handleWishlistClick}>
              Wishlist
            </button>
            <button className="account-button" onClick={handleBalanceClick}>
              My Balance
            </button>
          </div>
          {wishlistVisible && (
            <div className="wishlist-dropdown">
              <ul>
                {wishlistItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {balanceVisible && (
            <div className="balance-dropdown">
              <p>Your Balance:</p>
              <input
                type="text"
                placeholder="Enter your balance"
                value={userBalance}
                onChange={(e) => setUserBalance(e.target.value)}
                style={{ border: "1px solid #ccc", padding: "5px" }}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
        </div>
    );
  };
  
  export default Account;

  