import React from "react";
import imgHome from "../assets/home-solid.svg";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav style={{ backgroundColor: "#0098ff"}}>
        <Link to="/">
          <img className='home-icon' src={imgHome} alt="home icon"/>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
