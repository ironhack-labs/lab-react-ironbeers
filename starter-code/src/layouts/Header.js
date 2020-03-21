import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Images
import iconHome from '../images/icon-home.png'

export const Header = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    return (
        currentLocation !== '/' && <header className="bg-primary">
            <div className="container pt-1 pb-2 text-center">
                <Link to="/">
                    <img src={iconHome} width="20" alt="" />
                </Link>
            </div>
        </header>
    )
}