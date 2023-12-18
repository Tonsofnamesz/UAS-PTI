import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginSignup.css';
import AnimeGirl from '../pics/Background_Imgs/cat-war.gif';
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

  React.useEffect(() => {
    const savedName = localStorage.getItem('savedName');
    const savedPassword = localStorage.getItem('savedPassword');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <div className="LoginSign">
      <div className="WebTitle">INVENIRE GRIFFON</div>
      <div className="TopSpacing"></div>
      <div className="RightSideContainer">
        <img src={AnimeGirl}></img>
      </div>
      <div className="WebTitle2">INVENIRE</div>
      <div className="WebTitle3">GRIFFON</div>
      <div className="Logincontainer">
          <img className="LoginVectorUp" src={LoginVecUp} />
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action !== 'Login' && (
              <div className="input">
                <img src={emailIcon} alt="" />
                <input type="email" placeholder="Email" />
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
          <img className="LoginVectorDown" src={LoginVecDown} />
        </div>
      <div style={{ marginTop: '1%' }}></div>
      <Footer />
      </div>
  );
};

export default LoginSignup;