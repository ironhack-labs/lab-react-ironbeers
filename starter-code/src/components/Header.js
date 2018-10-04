import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div style={{backgroundColor: "DeepSkyBlue"}}>
            <p><Link to="/">CASITA</Link></p>
        </div>
    )
}

export default Header;
