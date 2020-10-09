import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/">
                    <span className="icon">
                        <i className="fas fa-home"></i>
                    </span>
                </Link>
            </nav>
        </header>
    )
}

export default Header;
