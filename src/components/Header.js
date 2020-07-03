import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className = "container">
        <div className = "header"> <Link to = '/'><h1>⌂</h1></Link> </div>
            
        </div>
    );
};

export default Header;