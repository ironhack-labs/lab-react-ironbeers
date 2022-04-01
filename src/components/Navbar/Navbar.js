import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'><i className="bi bi-house-fill"></i></Link>
        </nav>
    )
}

export default Navbar;