import React from 'react';
import '../TermsConds.css';
import Header from '../Header';
import Navigation from './Navigation';
import Footer from '../Footer';

const ReturnRefund = () => {
    return (
        <div>
        <div className="TermsStuff">
            <div className="headerContainer">
          <Header />
        </div>
      <div className="secondHeaderContainer">
          <Navigation />
        </div>
            <h1>Return & Refund Policies</h1>
            <h2>Cancellation</h2>
            <p>If your order hasn’t been processed yet, we will help you to change the items you wish to replace.</p>
            <p>Cancellation of an order is possible as long as the order hasn’t been shipped yet. A cancellation fee of 10% is charged to a customer who wants to cancel their order. Cancellation of an order is not possible for orders that have already been shipped.</p>
            <h2>Returns</h2>
            <p>Our policy lasts 7 days. If 7 days have gone by since you received your purchase, unfortunately, we can’t offer you a refund or exchange.</p>
            <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
            <p>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</p>
            <h2>Refunds (if applicable)</h2>
            <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
            <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
            <h2>Late or missing refunds (if applicable)</h2>
            <p>If you haven’t received a refund yet, first check your bank account again.</p>
            <p>Then contact your credit card company, it may take some time before your refund is officially posted.</p>
            <p>Next contact your bank. There is often some processing time before a refund is posted.</p>
            <p>If you’ve done all of this and you still have not received your refund yet, please contact us at contact@inveniregriffon</p>
            <h2>Sale items (if applicable)</h2>
            <p>Only regular priced items may be refunded, unfortunately, sale items cannot be refunded.</p>
            <h2>Exchanges (if applicable)</h2>
            <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at contact@markipliermerch.shop and we will advise you from there</p>
            <h2>Shipping</h2>
            <p>To return your product, you will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
            <p>Depending on where you live, the time it may take for your exchanged product to reach you may vary.</p>
            <h2>REFUND POLICY</h2>
            <p>Once your return has been received and inspected, we will send you an email notification regarding your returned item. We will also notify you of the status of your refund.</p>
            <p>If the refund is approved, it will be processed, and a credit will automatically be applied to your credit card or your original method of payment. The processing time might differ, depending on your payment merchant but it should take a couple of days.</p>
            <h2>LATE OR MISSING REFUNDS</h2>
            <p>If you have not received a refund after a week has gone by, please check your bank account again. You should also contact your credit card company. It may take some time before your refund is fully processed.</p>
            <p>You can also contact your bank. There is often some processing time before a refund is processed.</p>
        </div>
        <Footer />
        </div>
        
    );
};

export default ReturnRefund;