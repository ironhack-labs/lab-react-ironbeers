import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>
            <Link to={`/`}><img src="/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="house icon" /></Link>
            </header>
        </div>
    )
}

export default Header
