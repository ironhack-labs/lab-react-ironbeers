import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <NavLink  to="/home"><h3 id="navbar-dec">🏠</h3></NavLink>
            </nav>
        </div>
    )
}
