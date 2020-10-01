import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return(
        <nav className="NavBar"><Link to="/" className="navBarLink">⌂</Link></nav>
    );
};

export default NavBar;