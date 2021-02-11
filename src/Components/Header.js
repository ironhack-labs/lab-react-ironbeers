import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
        <Link to='/'><i style={{ color: 'white' }} className="fas fa-home "></i></Link>
    </nav>
}

export default Header;