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
    email: localStorage.getItem('email') || '',
    password: localStorage.getItem('password') || '',
    address: localStorage.getItem('address') || '',
    country: localStorage.getItem('country') || '',
    zipCode: localStorage.getItem('zipCode') || '',
  });

  React.useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setSavedName(savedName);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Save the form data to local storage
    Object.keys(userData).forEach((key) => {
      localStorage.setItem(key, userData[key]);
    });

    alert('Changes saved successfully!');
  };

  React.useEffect(() => {
    const storedUserData = {};
    Object.keys(userData).forEach((key) => {
      storedUserData[key] = localStorage.getItem(key) || '';
    });
    setUserData(storedUserData);
  }, []);

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

  const handlePasswordChange = () => {
    const correctCurrentPassword = 'examplePassword';

    if (userData.currentPassword !== correctCurrentPassword) {
      alert("Incorrect current password");
      return;
    }
    if (userData.newPassword !== userData.verifyNewPassword) {
      alert("New password and verify password do not match");
      return;
    }

    alert("Password changed successfully!");
  };

  const renderContent = () => {
    switch (selectedButton) {
      case "UserProfileInfo":
        return (
          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
            <div>
              <label htmlFor="userName" className="input-label">Username:</label>
              <input
              type="text"
              id="userName"
              name="userName"
              value={userData.userName}
              onChange={handleInputChange}
            />
            </div>
            <div>
              <label htmlFor="email" className="input-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                  onChange={handleInputChange}
                  className="input-field"
              />
            </div>
            <div>
              <label htmlFor="address" className="input-label">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userData.address}
                  onChange={handleInputChange}
                  className="input-field"
              />
            </div>
            <div>
              <label htmlFor="country" className="input-label">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={userData.country}
                  onChange={handleInputChange}
                  className="input-field"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="input-label">Zip Code:</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={userData.zipCode}
                  onChange={handleInputChange}
                  className="input-field"
              />
              </div>
              <button type="submit">Save Changes</button>
            </div>
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
          <div className="OrderHistory">
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
                              <p className="itemName">{item.name}</p>
                              <p>
                                Price: ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                              </p>
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