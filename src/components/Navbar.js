import React from "react";
import { Link } from "react-router-dom";
import homeIcon from './../assets/home.svg'
const Navbar = () => {
  return (
    <>
      <Link to={`/`}>
      <nav class="navbar navbar-dark bg-primary">
           <img
            src={homeIcon}
            alt="nav" style = {{height:'3rem' ,paddingLeft:"650px"}}
          /> 
         
        </nav>
      </Link>
    </>
  );
};

export default Navbar;
