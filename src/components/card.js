import React from "react";
function Card({item,handleClick}) {
    const {title,price,thumbnail} = item
  return (
    <div className="cards">
      <div className="image_box">
        <img src={thumbnail} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Price - {price}Rs</p>
        <button onClick={()=> handleClick(item)}>Add to Cart </button>
      </div>
    </div>
  );
}

export default Card;