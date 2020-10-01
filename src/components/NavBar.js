import React from 'react'
import {Link} from 'react-router-dom'

import logo from './home.png'

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1"><Link to='/'><img src={logo} alt="logo" className="logo"/></Link></span>
        </nav>
    )
}

export default NavBar