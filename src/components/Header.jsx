import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to='/'><img src='./../../src/assets/home.png' alt="Home"/></Link>
        </nav>
    )
}

export default Header
