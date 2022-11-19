import { Link, NavLink } from "react-router-dom";
import home_logo from '../assets/home_logo.png'

import React from 'react'

function Navbar() {
  return (
    <nav className="Navbar">
    <ul>
        <NavLink to ="/" className={({isActive}) => (isActive ? 'selected' : '')}>
            <img className="logo_home" src={home_logo}/>
        </NavLink>

    </ul>
</nav>
  )
}

export default Navbar;