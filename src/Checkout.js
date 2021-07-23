import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div>
        <h2 className="checkout__title">Your Shopping Basket</h2>
      </div>
      <div className='checkout__right'>
          <Subtotal/>

      </div>
    </div>
  );
};

export default Checkout;
