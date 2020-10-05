import React from 'react';
import { Link }  from 'react-router-dom';
import './Header.css'

function Header () {
    return (
        <div className="header">
            <Link to='/' className="link">
            <img src="./images/home-icon.png " alt="home-icon" />
            </Link>  
        </div>
    )
}

export default Header