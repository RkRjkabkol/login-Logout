import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove,} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const discount=itemsPrice>=500 ? 70:0 ;
 
  const totalPrice = itemsPrice + taxPrice + shippingPrice-discount;

  

  
  return (
    <div className="block col-5">
      <h2>Cart Items</h2>
      <hr/>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
              
              <div className="col-1">
            <img src={item.image} alt={item.name}  height="35px" width="40px"/>
            </div>
            <div className="col-3">{item.name}</div>
            
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-5 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-3">Items Price</div>
              <div className="col-5 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-3">Tax Price</div>
              <div className="col-7 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-4">Delivery charge</div>
              <div className="col-6 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
           
             <hr/>
            <div className="row">
              <div className="col-3">
                <strong>Total Price</strong>
              </div>
              <div className="col-5 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Ordered successfully!')}>
                Order Now
              </button>
              
      
            </div>
          </>
        )}
      </div>
    </div>
  );
}