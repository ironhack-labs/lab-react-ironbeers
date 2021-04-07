import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="NavBar navbar" style={{ backgroundColor:'#3EC4FC'}}>
            <div className="container d-flex justify-content-center">
                <Link 
                    to={'/'}
                    className="navbar-brand">
                    <img src="/images/house-door.svg" alt="home"/>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;