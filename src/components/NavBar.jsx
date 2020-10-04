import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div style={{ backgroundColor: 'rgb(45, 197, 250)',  width: '100vw', height: '40px'}}>
        <Link to="/">
            <i className="fa fa-home" style={{ fontSize : '2rem', color: 'white', marginTop: '5px'}}></i>
        </Link>
    </div>
)

export default NavBar;