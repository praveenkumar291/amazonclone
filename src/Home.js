import React from 'react';
import './Home.css';
import Product from './Product';
// import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className=' home__continer'>
        <img
          className='home__image'
          alt='hm img'
          src='https://images-na.ssl-images-amazon.com/images/S/abs-image-upload-na/f/AmazonStores/A21TJRUUN4KGV/633854548e472c302127478134092210.w3000.h600.png'
        />
        <div className='home__row'>
          <Product
            title='home product'
            price={29.99}
            img='https://m.media-amazon.com/images/I/51qBngYwQxL._AC_SY400_.jpg'
            rating={4}
          />
          <Product
            title='home product'
            price={30.99}
            img='https://rukminim1.flixcart.com/image/612/612/k66sh3k0/wardrobe-closet/z/k/w/particle-board-fk6007-flipkart-perfect-homes-espresso-original-imaf9m4gn4fp8k9w.jpeg?q=70'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            title='home product'
            price={29.99}
            img='https://rukminim1.flixcart.com/image/612/612/kll7bm80/tv-entertainment-unit/v/a/p/rosewood-sheesham-heww-tveu1-worldwood-natural-brown-finish-original-imagynt2f4hvdqns.jpeg?q=70'
            rating={5}
          />
          <Product
            title='home product'
            price={28.99}
            img='https://rukminim1.flixcart.com/image/612/612/kl2mljk0/tv-entertainment-unit/y/a/c/particle-board-fk7005-flipkart-perfect-homes-espresso-original-imagy9uftger5kfz.jpeg?q=70'
            rating={5}
          />
          <Product
            title='home product'
            price={35.99}
            img='https://rukminim1.flixcart.com/image/612/612/km9ht3k0/sofa-set/4/4/i/black-na-sofa-set-3-1-1-bharath-enterprises-black-original-imagf6zyzzk4zqzc.jpeg?q=70'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            title='home product'
            price={50.99}
            img='https://rukminim1.flixcart.com/image/612/612/k687wy80/bed/f/g/u/king-na-particle-board-bkwen00nhbs200p-flipkart-perfect-homes-original-imafzqnfp58xjgjy.jpeg?q=70'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
