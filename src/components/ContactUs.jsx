import React, {useState} from "react";
import "../ContactUs.css";
import Header from '../Header';
import Navigation from './Navigation';
import Footer from '../Footer';


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactType: "email", 
    message: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div>
      <div className="headerContainer">
          <Header />
        </div>
      <div className="secondHeaderContainer">
          <Navigation />
      </div>
        <div className="formContainer">.</div>
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />

        <label htmlFor="phone">Phone No.</label>
        <input type="tel" id="phone" name="phone" onChange={handleChange} />

        <label htmlFor="contactType">Contact Type</label>
        <select id="contactType" name="contactType" onChange={handleChange}>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>

        <label htmlFor="message">Message</label>
        <input
          id="message"
          name="message"
          onChange={handleChange}
        ></input>

        <label htmlFor="captcha">5 + 6 = ?</label>
        <input
          type="text"
          id="captcha"
          name="captcha"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <h3>CONTACT US IVENIRE GRIFFON</h3>
        <p>ONLINE STORE | CALL 0212255334</p>
        <p>E-MAIL: IVENIRE.GRIFFON@EMAIL.COM</p>
        <p>SCIENTIA PARK NO 35, INDONESIA</p>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default ContactForm;