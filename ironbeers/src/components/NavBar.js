import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isHome, hideHome }) => (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <strong className="navbar-item">¡¡DUFF!!</strong>
            { !isHome && 
                <Link to="/home"className="navbar-item arrow" onClick={hideHome}>
                    <i className="fas fa-arrow-left icon-arrow"></i>
                </Link>
            }
        </div>
    </nav>
)

export default Navbar;