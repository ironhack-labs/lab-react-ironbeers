import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <header>
            <Link to={`/`}><h1>HOME</h1></Link>
            </header>
        </div>
    )
}

export default Header