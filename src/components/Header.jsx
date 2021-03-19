import React from 'react'
import { Link } from 'react-router-dom'
import home from './../assets/home.png'

function Header() {
    return (
        <nav style={{width: '100vw', backgroundColor: "blue"}}>
            <Link to='/'><img id='nav-image' src={home} alt="Home"/></Link>
        </nav>
    )
}

export default Header
