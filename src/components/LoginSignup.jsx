import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginSignup.css';
import Element1 from '../pics/Background_Imgs/element1true.png';
import LoginVecUp from '../pics/Background_Imgs/loginpagevectorup-removebg-preview.png';
import LoginVecDown from '../pics/Background_Imgs/loginpagevectordown-removebg-preview.png';
import Element5 from '../pics/Background_Imgs/element5.png';
import Element2 from '../pics/Background_Imgs/element1footer.png';
import userIcon from '../pics/Thumbnails/person.png';
import emailIcon from '../pics/Thumbnails/email.png';
import passwordIcon from '../pics/Thumbnails/password.png';
import Footer from '../Footer';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');

  const handleSignup = () => {
    localStorage.setItem('savedName', name);
    navigate('/');
  };

  React.useEffect(() => {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <div className="LoginSign">
      <div className="WebTitle">INVENIRE GRIFFON</div>
      <div className="TopSpacing"></div>
      <div className="Element1">
        <img src={Element1}></img>
      </div>
      <div className="LoginVectorUp">
        <img src={LoginVecUp}></img>
      </div>
      <div className="Element5">
        <img src={Element5}></img>
      </div>
      <div className="WebTitle2">INVENIRE</div>
      <div className="WebTitle3">GRIFFON</div>
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
            Forget Password?<span> Click Here!</span>
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
        <div className="LoginVectorDown">
          <img src={LoginVecDown}></img>
        </div>
      </div>
      <div style={{ marginTop: '150px' }}></div>
      <Footer />
      </div>
  );
};

export default LoginSignup;



