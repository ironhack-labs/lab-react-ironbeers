import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to="/">
            <img src="./images/home.png" alt="home"/>
            </Link>
        </div>
    )
}

export default Header
