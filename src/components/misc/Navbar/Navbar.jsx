import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link to={'/'}>
                <img style={{width:"30px", borderRadius:"50%"}} src="https://previews.123rf.com/images/dustin999/dustin9992007/dustin999200700345/152428905-house-icon-home-icon-house-icon-isolated-on-white-background.jpg" alt="house"></img>
            </Link>
        </div>
    );
};

export default Navbar;