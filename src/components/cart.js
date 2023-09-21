import "../styles/cart.css"
import React, { useState,useEffect } from "react";

export default function Cart({cart,handleChange,setCart}){
    const [price, setPrice] = useState(0);
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.price));
        console.log(cart,ans)
        setPrice(ans);
      };
    
      useEffect(() => {
        handlePrice();
      });
     const result = cart.reduce(function (r, a) {
        r[a.title] = r[a.title] || [];
        r[a.title].push(a);
        return r;
    }, Object.create(null));
    { Object.entries(result).map((t,k) => console.log("key",t[1])) }          

    return (
        <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.thumbnail} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, item.price)}>+</button>
              <button>{item.count || 1}</button>
              <button onClick={() => handleChange(item, -item.price)}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button >Remove</button>
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