import React, { useState } from "react";
import "./CustomerHelp.css";

function App() {
  const [showDescriptions, setShowDescriptions] = useState({});

  const items = [
    {
      name: "How to Order:",
      descriptions:
        "Select the product you want, specify the quantity, then click 'Order Now'. Make sure you have checked the product details before placing an order.",
    },
    {
      name: "How to Pay",
      descriptions:
        "After placing an order, you will be directed to the payment page. Choose your preferred payment method, then follow the instructions provided to complete the transaction.",
    },
    {
      name: "Shipping",
      descriptions:
        "Once the payment is successful, the product will be shipped to the address you entered during checkout. You can track the shipping status through the 'My Shipments' page.",
    },
    {
      name: "Product Returns",
      descriptions:
        "If you are not satisfied with the received product, you can request a return within a certain period. Please visit the 'Product Returns' page for more information.",
    },
    {
      name: "Customer Service",
      descriptions:
        "If you have any questions or issues, our customer service team is ready to assist. You can contact us via email, phone, or live chat on our website.",
    },
    {
      name: "How to Register",
      descriptions:
        "Click the 'Register' button in the top right corner of the page, then fill out the form with the required information. After that, click 'Create Account' to complete the registration process.",
    },
    {
      name: "Forgot Password",
      descriptions:
        "If you forget your password, click 'Forgot Password' on the login page. Enter your email address and we will send you a link to reset your password.",
    },
    {
      name: "How to Use voucher",
      descriptions:
        "If you have a discount voucher, enter the voucher code on the checkout page before making a payment. The discount will automatically be applied to your total shopping amount.",
    },
    {
      name: "How to Track Orders",
      descriptions:
        "You can track your order through the 'My Orders' page. Click on the order number to view the details and shipping status of your order.",
    },
    {
      name: "How to Change Account Information",
      descriptions:
        "You can change your account information such as shipping address or payment method on the 'Account Settings' page. Make sure to save changes before leaving the page.",
    },
    {
      name: "How to Leave a Review",
      descriptions:
        "After receiving the product, you can leave a review on the product page. Your review will help other customers in making purchase decisions.",
    },
    {
      name: "How to Subscribe to the Newsletter",
      descriptions:
        "To get the latest updates about our products and offers, enter your email address in the 'Subscribe to Newsletter' section at the bottom of the page.",
    },
    {
      name: "How to Delete an Account",
      descriptions:
        "CoIf you wish to delete your account, please contact our customer service. We will assist you through the process.",
    },
    {
      name: "How to Use Wishlist",
      descriptions:
        "If you find a product you like but are not ready to purchase it, you can add it to your 'Wishlist'. You can view all the products you've added to your 'Wishlist' on the 'My Account' page.",
    },
  ];

  const toggleDescriptions = (itemName) => {
    setShowDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [itemName]: !prevDescriptions[itemName],
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Customer Help</h1>
      </header>
      {items.map((item, index) => (
        <div className="item" key={index}>
          <div
            className={`list-item ${showDescriptions[item.name] ? "open" : ""}`}
            onClick={() => toggleDescriptions(item.name)}
          >
            {item.name}
          </div>
          {showDescriptions[item.name] && (
            <div className="descriptions">{item.descriptions}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
