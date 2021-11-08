import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/" exact >Home </Link>
        </div>
    )
}

export default Header;