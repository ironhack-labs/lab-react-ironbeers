import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import header from '../../assets/header.png'

const Header = () => {

    return (
        <Navbar>
            <Nav>
                <Link to="/" className="nav-link"><img src={header} /></Link>
            </Nav>
        </Navbar>
    )
}

export default Header