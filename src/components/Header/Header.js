import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link to="/">
                <p className="navbar-brand">IronBeers</p>
            </Link>
        </nav>
    )
}
export default Header;
