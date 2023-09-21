import React, { useEffect, useState } from "react";
import Card from "./card"
import "../styles/amazon.css"
function Amazon({handleClick}) {
  const [products, setProducts] = useState([])
  useEffect(() =>{
    fetch("https://dummyjson.com/products").then(res => res.json()).then(respose => setProducts(respose))
  },[])

  return (
   <section>
    {products?.products?.map((item) => <Card item={item} handleClick={handleClick}/>)}
   </section>
  );
}

export default Amazon;  