import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Images
import iconHome from '../images/icon-home.png'

export const Header = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    return (
        currentLocation !== '/' && <header className="bg-primary">
            <div className="main-header">
                <Link to="/">
                    <img src={iconHome} width="22" alt="" />
                </Link>
            </div>
        </header>
    )
}