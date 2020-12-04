import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import image from './home-icon.png'

const Header = () => {
    return(
        <header className="header">
            <Link to="/">
                <img src={image} alt="home icon" />
            </Link>
        </header>
    )
}

export default Header