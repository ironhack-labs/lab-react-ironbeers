import React from 'react'
import styled from './Navbar.styled'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>
                <p>Home</p>
            </Link>
        </nav>
    )
}
