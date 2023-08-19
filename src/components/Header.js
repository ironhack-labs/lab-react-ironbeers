import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerImg from '../assets/header.png'

function Header({showHeaderProp}) {
    const location = useLocation();
    const showHeader = showHeaderProp && location.pathname !== '/';

    return (
        showHeader && (
        <header>
            <img src={ headerImg } alt="Header" />
                <Link to="/">Home</Link>
                
        </header>
        )
    ); 
}

export default Header;