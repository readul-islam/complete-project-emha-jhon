import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons'

import { addToDb, deleteShoppingCart, getLocalStorage } from "../../../utilities/fakedb";

import Cartdetails from "../../Cartdetails/Cartdetails";
import Displayproduct from "../../Displayproduct/Displayproduct";
import "./Shop.css";

const Shop = ({total}) => {
  // console.log(total)
    const [products, setProducts] = useState([]);
    const [addtocart, setAddtocart] = useState([]);
    useEffect(()=>{

        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
      const localStrogeData = getLocalStorage();
      const saveCart = [];
      for(const id in localStrogeData){
        const addedProduct = products.find(product => product.id === id);
       if(addedProduct){
         const quantity =localStrogeData[id];
         addedProduct.quantity = quantity;
         saveCart.push(addedProduct);
       }
      }
      setAddtocart(saveCart)
      
    },[products])
    const handler = (product) =>{
      let newCart = [];
      const exist = addtocart.find(item => item.id === product.id);
      if(!exist){
        product.quantity = 1;
       newCart = [...addtocart, product ]
      }
      else{
        const rest = addtocart.filter(item => item.id !== product.id);
        exist.quantity = exist.quantity + 1;
        newCart = [...rest, exist]
      }
      setAddtocart(newCart);
      addToDb(product.id)
    }
    // console.log(addtocart)
    const removeHandler = () =>{
      deleteShoppingCart()
     
      let newCart = [];
      setAddtocart(newCart)
    }

   
  return (
    <div className="shop-container">
      <div className="products-container">
       {
           products.map(product => 
        <Displayproduct 
           product={product} 
           key={product.id}
           handler = {handler}>
            
        </Displayproduct>)
       }
      </div>
     


      <div className="cart-container">
      
       
       <div className="product-info">
       <h3>Order Summary</h3>
       <Cartdetails products={addtocart}
       total={total}
       ></Cartdetails>

       <div className="button-section">
       <button onClick={removeHandler} className="clear-button"><span>Clear Cart
       <span id="icon-delete"><FontAwesomeIcon icon={faTrashRestoreAlt} /></span></span></button>
       <button  className="clear-button remove"><span>Review <FontAwesomeIcon icon={faArrowRightArrowLeft} /></span></button>
       
       </div>
      </div>

      
      </div>
    </div>
  )
};

export default Shop;
