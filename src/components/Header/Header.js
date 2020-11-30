import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <nav className="header">
            <NavLink to="/">
            <i class="fas fa-home"></i>
            </NavLink>
        </nav>
    )
}

export default Header;