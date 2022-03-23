
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/Logo.svg'
import './Header.css'
import Shop from './Shop/Shop';
import { useState } from 'react';

const Header = () => {
    
   const [price, setPrice] = useState(0)
   const [quantity, setQuantity] = useState(0)
    
        
    // setPrice(totalPrice)
    const totalPrice=(price,quantity)=>{
       setPrice(price)
       setQuantity(quantity)
    }
    
    return (
        <div className="header">
           <div className="header-container">
               <img src={logo} alt="" />
               <div className="header-content-right">
                <a href="/order">Order</a>
               <a href="/order review"> Order Review</a>
               <a href="/Manage">Manage Inventory</a>
               <a href="/Manage">Contact</a>
               <a href="/Manage">About</a>
              <span className='dollar-icon'> <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> <sup className='pq'>{price}</sup>
              </span>
              <span className='cart-icon'>
                  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> <sup className='pq'>{quantity}</sup>
                  <sup></sup>
              </span>
               </div>
               
                   
                
           </div>
        
             
              <Shop total ={totalPrice}></Shop>  
             
        </div>
         
    );
};

export default Header;