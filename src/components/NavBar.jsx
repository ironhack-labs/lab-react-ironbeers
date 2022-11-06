import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";


function NavBar() {

    
  return (
    <div>
      <nav style={{ backgroundColor: "#3dc4fc",
      height:"100px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      border:"1px solid" }}>
        <Link to="/" ><AiOutlineHome size="2em" color="white"/></Link>


      </nav>
    </div>
  );
}

export default NavBar;
