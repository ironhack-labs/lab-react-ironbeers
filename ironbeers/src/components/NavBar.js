import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isHome }) => (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <strong className="navbar-item">¡¡DUFF!!</strong>
            { !isHome && 
                <Link to="/home"className="navbar-item">
                    Home
                </Link>
            }
        </div>
    </nav>
)

export default Navbar;