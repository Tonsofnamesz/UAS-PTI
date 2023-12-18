import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from "../productSlice";
import profilePic from '../pics/Thumbnails/blank-profile-pic.png';
import '../Account.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from '../Footer';


const Account = () => {
  const [savedName, setSavedName] = useState('');
  const [savedPassword, setSavedPassword] = useState('');
  const [selectedButton, setSelectedButton] = useState("UserProfileInfo");
  const [userData, setUserData] = useState({
    userName: localStorage.getItem('userName') || '',
    email: '',
    password: '',
    address: '',
    country: '',
    zipCode: '',
  });

  React.useEffect(() => {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
      setSavedName(savedName);
    }
  }, []);

  React.useEffect(() => {
    const savedPassword = localStorage.getItem('savedPassword');
    if (savedPassword) {
      setSavedPassword(savedPassword);
    }
  }, []);

  const dispatch = useDispatch();
  const orderCart = useSelector(state => state.orderCart);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  function countArrayLength(array) {
    let count = 0;
    for (let item of array) {
      count++;
    }
    return count;
  }

  const handlePasswordChange = () => {
    // Replace 'correctCurrentPassword' with your actual logic
    const correctCurrentPassword = 'examplePassword';

    // Check if the current password is correct
    if (userData.currentPassword !== correctCurrentPassword) {
      // Handle incorrect current password
      alert("Incorrect current password");
      return;
    }

    // Check if the new password and verify new password match
    if (userData.newPassword !== userData.verifyNewPassword) {
      // Handle password mismatch
      alert("New password and verify password do not match");
      return;
    }

    // Save the new password or perform other actions as needed
    // ...

    alert("Password changed successfully!");
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
          <form onSubmit={handleFormSubmit}>
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
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={userData.newPassword}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="verifyNewPassword">Verify New Password:</label>
        <input
          type="password"
          id="verifyNewPassword"
          name="verifyNewPassword"
          value={userData.verifyNewPassword}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handlePasswordChange}>Save Changes</button>
          </form>
        );
        case "OrderHistory":
        return (
          <div>
            {/* Render Order History content */}
            <div>
              <h2>Order History</h2>
              {orderCart.length > 0 ? (
                <ul>
                  {orderCart.map((order, index) => (
                    <li key={index}>
                      <details>
                        <summary>Order {index + 1}</summary>
                        <ul>
                          {order.items.map((item, i) => (
                            <li key={i}>
                              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                              {item.name} - ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No orders yet.</p>
              )}
            </div>
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
                <h1>{savedName}</h1>
              </div>
              <div className="NavbarBelowProfileContainerLeft">
                <div className="profileButtons">
                  <button onClick={() => setSelectedButton("UserProfileInfo")}>User Profile Info</button>
                  <button onClick={() => setSelectedButton("PasswordManagement")}>Password Management</button>
                  <button onClick={() => setSelectedButton("OrderHistory")}>Order History</button>
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