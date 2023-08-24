import React from "react";
import genMediaLogo from "../images/genMediaLogo.jpg";
import person_profile from "../images/person_profile.jpg";
import { BiShoppingBag, BiHeart } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left"><img src={genMediaLogo} alt="genMedia Logo" /></div>
      <ul className="navbar-main">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/products"><li>Products</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
      </ul>
      <div className="navbar-right">
        <BiShoppingBag className="items" size={30}/>
        <BiHeart className="items" size={30}/>
        <div className="items" id="image-container"><img src={person_profile} alt="genMedia" /></div>
      </div>
    </div>
  );
};

export default Navbar;
