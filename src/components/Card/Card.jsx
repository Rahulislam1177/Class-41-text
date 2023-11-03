import React from 'react';
import './Card.css'

const Card = ({card}) => {
  

  let total = 0;
  let quantity = 0;
  let shipping = 0;

 for(const product of card){
 quantity = quantity + product.quantity;
 total = total + product.price;
 shipping = shipping + product.shipping;





 }
    return (
        <div className='Card'>
      <h5>Order Summary</h5>
      <h6>Selected Items: {quantity} </h6>
      <h6>Total Price: ${total}</h6>
      <h6>Total Shipping Charge: ${shipping}</h6>
      <h6>Tax: $</h6>
      <p>Grand Total: $</p>

      <button className='clear'>Clear Cart</button>
      <button className='review'>Review Order</button>

        </div>
    );
};

export default Card;