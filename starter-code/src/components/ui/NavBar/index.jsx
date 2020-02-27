import React from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Link to='/' className="header">
            <i className="material-icons">
                home
            </i>
        </Link>
    )
}

export default NavBar