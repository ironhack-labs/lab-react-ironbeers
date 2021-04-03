import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <Link to='/'><img className="icon-home" src="/img/home.png"></img></Link>
        </div>
    );
}

export default Navbar;