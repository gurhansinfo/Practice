import React from 'react'
import { useEffect, useState } from "react";

const Product = () => {
  const [card, setCard] = useState('');
  const fetchData = () => {
    return fetch('https://fakestoreapi.com/products?limit=12')
          .then((response) => response.json())
          .then((data) => setCard(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <>
    <div className='product_section'>
      <div className='container'>
        <div className='products'>
        {card && card.length > 0 && card.map((cardObj, index) => (
            
            <div className='product' key={cardObj.id}>
              <div className='product_wrapper'>
                <div className='product_img'>
                  <img src={cardObj.image}/>
                </div>
                <div className='product_meta'>
                  <div className='product_title'>
                    <h3>{cardObj.title}</h3>
                  </div>
                  <div className='price'>
                    <span>${cardObj.price}</span>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
          

        </div>
      </div>
    </div>
    <div>
    </div>
    </>
  )
}

export default Product