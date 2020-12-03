import React from 'react'
import {Link} from "react-router-dom"

import "./Navbar.css"

import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav-style">
             <Link to='/'>
                <img src="https://p1.hiclipart.com/preview/239/476/5/architecture-icon-building-icon-furniture-icon-home-icon-homepage-icon-house-icon-office-icon-text-logo-triangle-png-clipart.jpg" alt="home-icon" />
            </Link>
        </nav>
    )
}

export default Navbar