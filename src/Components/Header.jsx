import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-primary d-flex justify-content-center">
        <NavLink exact to="/" className="navbar-brand text-white">
          Home
        </NavLink>
      </nav>


      
    </div>
  )
}

export default Header
