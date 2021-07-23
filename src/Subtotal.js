import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal(0 items):<strong>0</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contians a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={2}
        displayType={'text'}
        thousandsSeparator={true}
        prefixe={'$'}
      />{' '}
    </div>
  );
};

export default Subtotal;
