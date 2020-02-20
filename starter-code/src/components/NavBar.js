import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>
                <p><span role='img' aria-label='emoji'>🏠</span></p>
            </NavLink>
        </nav>
    )
}

export default NavBar
