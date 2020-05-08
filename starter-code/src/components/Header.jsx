import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavLink exact to='/'>
        <div className='header'>
          <img src='../images/home.svg' alt='home' />
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
