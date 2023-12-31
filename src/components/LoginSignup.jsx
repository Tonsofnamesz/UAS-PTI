import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginSignup.css';
import AnimeGirl from '../pics/Background_Imgs/Suisui.png';
import LoginVecUp from '../pics/Background_Imgs/loginpagevectorup-removebg-preview.png';
import LoginVecDown from '../pics/Background_Imgs/loginpagevectordown-removebg-preview.png';
import userIcon from '../pics/Thumbnails/person.png';
import emailIcon from '../pics/Thumbnails/email.png';
import passwordIcon from '../pics/Thumbnails/password.png';
import Footer from '../Footer';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    localStorage.setItem('savedName', name);
    localStorage.setItem('savedPassword', password);
    navigate('/');
  };

  useEffect(() => {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <div className="LoginSign">
      <div className="WebTitle">INVENIRE GRIFFON</div>
      <div className="TopSpacing"></div>
      <div className="RightSideContainer">
        <img src={AnimeGirl} alt="Anime Girl" />
      </div>
      <div className="WebTitle2">INVENIRE</div>
      <div className="WebTitle3">GRIFFON</div>
      <div className="Logincontainer">
        <img className="LoginVectorUp" src={LoginVecUp} alt="Login Vector Up" />
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action !== 'Login' && (
            <div className="input">
              <img src={emailIcon} alt="Email Icon" />
              <input type="email" placeholder="Email" />
            </div>
          )}
          <div className="input">
            <img src={userIcon} alt="User Icon" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="Password Icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="submit-container">
          <div
            className={action === 'Sign Up' ? 'submit gray' : 'submit'}
            onClick={handleSignup}>
            Login
          </div>
        </div>
        <img className="LoginVectorDown" src={LoginVecDown} alt="Login Vector Down" />
      </div>
      <div style={{ marginTop: '5%' }}></div>
      <Footer />
    </div>
  );
};

export default LoginSignup;
