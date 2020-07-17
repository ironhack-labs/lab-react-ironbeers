import React, {Component} from 'react'
import {Link} from 'react-router-dom'; 
import './style.css';

const Header =()=> {
    return (
        <div className="header">
            <Link to="/">Get back to starting page</Link>
        </div>
    )
}


export default Header; 