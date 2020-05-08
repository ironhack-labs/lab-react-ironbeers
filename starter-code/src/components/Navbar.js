import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
 return (
   <nav style={{backgroundColor: "lightBlue"}}>
     <NavLink to="/">
       <img src="/images/iconhome.png" style={{width: "3%", display: "block", marginLeft: "auto", marginRight: "auto"}} alt="homeicon" />
     </NavLink>
   </nav>
 );
};
export default Navbar