import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const[menu, setMenu]=useState("shop");
  return (
    <div className="nav_items">
      <div className="navbar">
        <img src={require("./logo.png")} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav_menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu ("Men")}}><Link style={{textDecoration:"none"}} to="/Men">Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu ("Women")}}><Link style={{textDecoration:"none"}} to="/Women">Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu ("Kids")}}><Link style={{textDecoration:"none"}} to="/Kids">Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav_cart">
        <Link to="/Login"><button>Login</button></Link>
        <Link to="/Cart"><img src={require("./cart_icon.png")} alt="cart icon" /></Link>
        <div className="nav_cart_count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
