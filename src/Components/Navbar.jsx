import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link exact to="/" className="nav__link">
                <nav className="navbar">
                        Home
                </nav>
            </Link>           
        </div>
    )
}

export default Navbar
