import React, { useState } from "react";
import profilePic from '../pics/Thumbnails/blank-profile-pic.png';
import '../Account.css';
import Header from '../Header';
import Navigation from './Navigation';
import Footer from '../Footer';


const Account = () => {
  const [selectedButton, setSelectedButton] = useState("UserProfileInfo");
  const [userData, setUserData] = useState({
    userName: localStorage.getItem('userName') || '', // Get the user's name from local storage
    email: '',
    password: '',
    address: '',
    country: '',
    zipCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const renderContent = () => {
    switch (selectedButton) {
      case "UserProfileInfo":
        return (
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="userName">User's Name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={userData.userName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={userData.country}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code:</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={userData.zipCode}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        );
      case "PasswordManagement":
        return (
          <div>
            {/* Render Password Management content */}
            <p>Password change form, security settings, etc.</p>
          </div>
        );
      case "OrderHistory":
        return (
          <div>
            {/* Render Order History content */}
            <p>Order history details, purchase history, etc.</p>
          </div>
        );
      case "PaymentMethods":
        return (
          <div>
            {/* Render Payment Methods content */}
            <p>Payment methods information, add/remove cards, etc.</p>
          </div>
        );
      case "PrivacySettings":
        return (
          <div>
            {/* Render Privacy Settings content */}
            <p>Privacy settings configuration, account visibility, etc.</p>
          </div>
        );
      default:
        return null;
    }
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
        <div className="AccountContainer">
          <div className="LeftSideAccountContainer">
            <div className="ProfileContainerTopLeft">
              <img src={profilePic} className="pfp" alt="Profile" />
              <div>
                <h1>user's name from local storage</h1>
              </div>
              <div className="NavbarBelowProfileContainerLeft">
                <div className="profileButtons">
                  <button onClick={() => setSelectedButton("UserProfileInfo")}>User Profile Info</button>
                  <button onClick={() => setSelectedButton("PasswordManagement")}>Password Management</button>
                  <button onClick={() => setSelectedButton("OrderHistory")}>Order History</button>
                  <button onClick={() => setSelectedButton("PaymentMethods")}>Payment Methods</button>
                  <button onClick={() => setSelectedButton("PrivacySettings")}>Privacy Settings</button>
                </div>
              </div>
            </div>
          </div>
          <div className="RightSideAccountContainer">
            <div className="NavContentsContainerRight">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;





  