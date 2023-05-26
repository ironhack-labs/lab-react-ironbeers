import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/beers">All Beers</a></li>
                <li><a href="/random-beer">Random Beer</a></li>
                <li><a href="/new-beer">New Beer</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
