import React from 'react'
import { Link } from 'react-router-dom'
import navImg from "../navbar.png"

const Navbar = () => {
    return (
        <nav>
            <Link to='/'><img src={navImg} alt="Nav" /></Link>
        </nav>
    )
}

export default Navbar;
