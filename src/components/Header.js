import React from 'react'
import { Link } from 'react-router-dom'
import headerLogo from '../assets/house-ironbeer.png'

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img src={headerLogo} alt="home" />
            </Link>
        </div>
    )
}

export default Header