import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <NavLink to="/"><h3>🏠</h3></NavLink>
            </nav>
        </div>
    )
}
