
import React from "react";
import { Link, NavLink } from "react-router-dom";  
import navBarPic from "../assets/home.png"

 
function Navbar() {
  return (
    <div className="Navbar">
        <NavLink to="/"><a href="" className="navBarPic"><img src={navBarPic} alt="home gif" className="navBarPic" /></a> </NavLink>
    </div>
  );
}
 
export default Navbar;