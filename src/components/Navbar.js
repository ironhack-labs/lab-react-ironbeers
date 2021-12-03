import React from 'react'
import { NavLink } from 'react-router-dom'

import home from '../assets/home.png'

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink to="/" className="navbar-brand"><img src={home} alt="home"></img></NavLink>
            </div>
        </nav>

    )
}

export default Navbar
