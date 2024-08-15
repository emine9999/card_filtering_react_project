import React from 'react';
import './card.css';

const Card = ({ image, description, price,name }) => {
  return (
    <div className='card'>
      <div className='card-head'>
        <img src={image} alt="product image" />
      </div>
     

      <div className='card-body'>
      <div className='description'>{name}</div>
      <div className='card-lower'>
         <span>{price}</span>
        <button className='btn'>Acheter</button>
        </div>
        </div>
      </div>
    
  );
};

export default Card;
