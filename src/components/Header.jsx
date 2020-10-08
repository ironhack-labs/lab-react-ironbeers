import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <nav className="NavMain">
        <NavLink exact to="/">
        <i class="fas fa-home"></i>
        </NavLink>
      </nav>
    )
}

export default Header
