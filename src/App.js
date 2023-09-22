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
    arr?.map((product, index) => {
      if (product?.id == item?.id)
      {
        if ( !arr[index]['itemNo'] && !arr[index]['totalPrice']){
          arr[index]['itemNo'] = 1 
          arr[index]['totalPrice'] = item.price
        }
        if (d > 0){
            arr[index]['itemNo'] += 1
            arr[index]['totalPrice'] += item.price
        }else{
            arr[index]['itemNo'] -= 1
            arr[index]['totalPrice'] -= item.price
        }
      }
    })

    setCart([...arr]);
    
  console.log("cart",cart,item)

  };

  return (
    <div className="App">
     <NavBar handleCart={handleCart}/>
     {show ? <Amazon handleClick={handleClick}/> : <Cart cart={cart} handleChange={handleChange} setCart={setCart}/>}
    </div>
  );
}

export default App;
