import React, { useState } from "react";
import NavBar from "./components/navbar";
import Amazon from "./components/amazon";
import Cart from "./components/cart";


function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  const handleCart = (item) =>{
    setShow(item)
  }
  const handleClick = (item) =>{
    setCart([...cart, item]);
  } 
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    setCart([...arr,arr[ind]]);
  };

  return (
    <div className="App">
     <NavBar handleCart={handleCart}/>
     {show ? <Amazon handleClick={handleClick}/> : <Cart cart={cart} handleChange={handleChange} setCart={setCart}/>}
    </div>
  );
}

export default App;
