
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-style">
            <ul>
                <li><NavLink exact to='/'>Home</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;