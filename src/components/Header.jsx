import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <nav className="NavMain">
        <NavLink exact to="/">
          Home
        </NavLink>
      </nav>
    )
}

export default Header
