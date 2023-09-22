import "../styles/cart.css"
import React, { useState,useEffect } from "react";

export default function Cart({cart,handleChange,setCart}){
    const [price, setPrice] = useState(0);
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.totalPrice || item.price));
        setPrice(ans);
      };
      
      const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
      };

      useEffect(() => {
        handlePrice();
      });
     
    return (
        <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.thumbnail} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.itemNo || 1}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)} >Remove</button>
            </div>
          </div>
        ))}

        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
    )
}