import React from 'react';

import './Cartdetails.css'

const Cartdetails = ({products,total}) => {
    // console.log(total)
    // console.log(products)
    let totalPrice = 0;
    let tax = 0;
    let shippingPrice = 0;
    let quantity = 0;
    let grandTotal = 0;
    for(const product of products){
        console.log(product)
        quantity = quantity + product.quantity ;
        totalPrice = totalPrice + product.price * product.quantity;
        // allPrice(totalPrice)
         tax = parseFloat((totalPrice * 0.1).toFixed(2))
         shippingPrice = shippingPrice + (product.shipping * product.quantity);
         grandTotal = totalPrice + tax + shippingPrice;
    }
    
    total(totalPrice,quantity)
    
    return (
        <div className="cart-details">
            <p>Selected Items: {quantity}</p>
            <p>Total Price:  ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingPrice}</p>
            
            <p>Tax:  ${(tax.toFixed(2))}</p>
            <h4>Grand Total:  ${grandTotal}</h4>
        </div>
    );
};

export default Cartdetails;
  