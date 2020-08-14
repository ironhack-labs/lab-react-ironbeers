import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
        </nav>
    )
}

export default Navbar