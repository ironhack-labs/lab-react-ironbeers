import React from 'react'
import SCNavbar from './Navbar.styled'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <SCNavbar>
            <Link to='/'>
                <i class="fas fa-home"></i>
            </Link>
        </SCNavbar>
    )
}
