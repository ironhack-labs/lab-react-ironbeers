import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
    return (
        <nav>
            <NavLink to="/"><span><i className="fas fa-home"></i></span>Home</NavLink> 
        </nav>
    )
}

export default Header