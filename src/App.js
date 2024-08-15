import React, { useState } from 'react';
import './App.css';
import { CategoryBar, CategoryButton, Card } from './components';
import {products} from '../src/assests/index'; 

export default function Main() {

  const categories = ['All', 'phone', 'bike', 'car']; 
  const [selectedCategory, setSelectedCategory] = useState('All');

  

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
    <body>
      <div className='header'>
        <h1>30 Days of React Project</h1>
        <h3>Welcome to El HASBI Store</h3>
      </div>
<div className='buttons'>
        {categories.map(category => (
          <CategoryButton 
            key={category} 
            category={category} 
            label={category} 
            onClick={() => setSelectedCategory(category)} 
          />
          
        ))}</div>

        <div className='card-container'>
      
        {filteredProducts.map(product => (
    
          <Card
            key={product.id} 
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.img}
          />
        ))}
       
      </div>
      </body>
    </>
  );
}
