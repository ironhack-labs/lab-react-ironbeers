import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <i className="fa-solid fa-house"></i>
      </NavLink>
    </nav>
  )
}

export default Navbar;