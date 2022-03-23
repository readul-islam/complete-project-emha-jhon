import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Displayproduct.css";
const Displayproduct = ({ product,handler }) => {
  // console.log(product);
  const { name, seller, img, price, ratings } = product;
  return (
    <div data-aos="zoom-in"
    data-aos-easing="linear"
    data-aos-duration="1500" className="product">
      <img src={img} alt="" />
      <div className="product-details">
      <h4>{name}</h4>
      <h5>Price: ${price}</h5>
     <div className="info-footer">
     <p>Manufacturer : {seller}</p>
      <p>Rating: {ratings} star</p>
     </div>
      </div>
      <button onClick={()=>{handler(product)}}  className='button-cart'>      <span>Add to Cart</span>
      <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
      
    </div>
  );
};

export default Displayproduct;
