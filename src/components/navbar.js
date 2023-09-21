import React from "react";
import "../styles/navbar.css"
function NavBar({handleCart}) {
  return (
    <nav>
      <div className="nav_box" >
        <span className="my_shop" onClick={()=> handleCart(true)}>
          My Shoping
        </span>
        <div className="cart" >
        <span>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" class="_1XmrCc _1FTDbN" width="24" height="24" onClick={()=> handleCart(false)}/>
          </span>
          <span>Cart</span>
        </div>
      </div>
    </nav>

  );
}

export default NavBar;