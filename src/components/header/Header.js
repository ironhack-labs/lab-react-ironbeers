import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/"><i className="fa fa-home"></i></NavLink>
            </div>
        </nav>
    );
}

export default Header;