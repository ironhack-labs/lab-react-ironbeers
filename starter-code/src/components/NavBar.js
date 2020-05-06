import React from 'react';

import { Link } from 'react-router-dom';
import navbar from '../images/navbar.png';

const NavBar = () => 
    <nav>
        <Link to="/">
            <img src={navbar} alt="navbar icon"/>
        </Link>
    </nav>

export default NavBar;