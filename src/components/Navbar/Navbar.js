import React from 'react'
import { NavLink} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
       <nav id="navbar">
            <NavLink exact to="/">
                Home
            </NavLink>
       </nav>
    )
}

export default Navbar;
