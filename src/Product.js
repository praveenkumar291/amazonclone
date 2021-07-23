import React from 'react';
import './Product.css';
// import { useStateValue } from './StateProvider';

const Product = ({ id, title, img, price, rating }) => {
  // eslint-disable-next-line
  // const [state, dispatch] = useStateValue();
  // const addToBasket = () => {
  //   //dispatch some action item the data
  //   dispatch({
  //     type: 'ADD_TO_BASKET',
  //     item: {
  //       id: id,
  //       title: title,
  //       img: img,
  //       price: price,
  //       rating: rating,
  //     },
    // });
  // };
  return (
    <div className='product'>
      <div className='product__info'>
        <strong>{title}</strong>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          {/* <p>⭐</p> */}
          {/* <p>⭐</p> */}
        </div>
      </div>
      <img src={img} alt='img' />
      <button >Add to Cart </button>
    </div>
  );
};

export default Product;
