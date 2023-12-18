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

const AboutUs = () => {
  return (
    <div className="AboutUS">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="secondHeaderContainer">
        <Navigation />
      </div>
      <h1>About Us</h1>
      <div className="MainContainer">
        {[
          { image: RyanPic, name: 'Jonathan Ryan R.', id: '00000070522' },
          { image: MatthewPic, name: 'Matthew Sebastian Kusnandar', id: '00000068148' },
          { image: DarrylPic, name: 'Darryl Pratama', id: '00000073584'},
          { image: DuncanPic, name: 'Duncan Carellius', id: '00000075260' },
          { image: AditPic, name: 'Aditya Putra Sabrina', id: '00000073584' },
        ].map((person, index) => (
          <div className="aboutUsContainer" key={index}>
            <div className="aboutUsInfo">
              <img src={person.image} className="aboutUsImage" alt={person.name} />
              <h2 className="aboutUsName">{person.name}</h2>
              {person.id && <h2>{person.id}</h2>}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
