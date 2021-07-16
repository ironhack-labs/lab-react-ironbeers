import React from 'react';
import { Link } from 'react-router-dom';
import navPic from '../assets/nav.jpg';

function Header() {
    return (
        <Link to="/">
            <div className="row">
                <nav>
                    <img src={navPic} style={{ width: "100%" }} />
                </nav>
            </div>
        </Link>
    );
};

export default Header;