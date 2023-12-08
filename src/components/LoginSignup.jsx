import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginSignup.css';
import userIcon from '../pics/Thumbnails/person.png';
import emailIcon from '../pics/Thumbnails/email.png';
import passwordIcon from '../pics/Thumbnails/password.png';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');

  const handleSignup = () => {
    // Save the name to localStorage
    localStorage.setItem('savedName', name);

    // Perform signup logic here

    // Redirect to the Account page
    navigate('/');
  };

  // Load savedName from localStorage on component mount
  React.useEffect(() => {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <div className="LoginSign">
      <div className="TopSpacing"></div>
      <div className="Logincontainer">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action !== 'Login' && (
            <div className="input">
              <img src={emailIcon} alt="" />
              <input
                type="email"
                placeholder="Email"
              />
            </div>
          )}
          <div className="input">
            <img src={userIcon} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="" />
            <input
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        {action !== 'Sign Up' && (
          <div className="forgot-password">
            Forget Password?<span>Click Here!</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === 'Sign Up' ? 'submit gray' : 'submit'}
            onClick={handleSignup}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;



