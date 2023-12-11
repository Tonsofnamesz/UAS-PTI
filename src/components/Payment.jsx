import React, { useEffect } from 'react';

const Payment = () => {
  const handlePayment = async () => {
    // Make an API call to your server to create a Midtrans transaction token
    const response = await fetch('/your-server-endpoint-to-create-midtrans-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Include any necessary data for creating the transaction token
      body: JSON.stringify({
        amount: 10000, // Example amount in cents
        orderId: 'ORDER123', // Example order ID
        // Add other necessary data
      }),
    });

    const data = await response.json();

    // Call the Midtrans Snap.js library to open the payment popup
    window.snap.pay(data.token);
  };

  useEffect(() => {
    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js'; // Use the correct URL for your environment

    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;

    // Set the script attribute (replace with your actual client-key)
    const myMidtransClientKey = 'SB-Mid-client-0eRhqyuFOGzBDZf4';
    scriptTag.setAttribute('data-client-key', myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div>
      <h1>Payment Page</h1>
      <p>Enter your payment details below:</p>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default Payment;

