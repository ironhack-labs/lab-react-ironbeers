import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/">Casita</Link>
        </nav>
    )
}

export default Header