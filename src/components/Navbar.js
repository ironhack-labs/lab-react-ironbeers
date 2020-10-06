import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}><img className="home-img" src="../img/home.png" alt="home-icon" /></Link>
        </nav>
    )
}

export default Navbar