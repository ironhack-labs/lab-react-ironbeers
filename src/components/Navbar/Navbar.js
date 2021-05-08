import React from 'react'
import SCNavbar from './Navbar.styled'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <SCNavbar>
            <nav>
                <Link to='/'>
                    <p>Home</p>
                </Link>
            </nav>
        </SCNavbar>
    )
}
