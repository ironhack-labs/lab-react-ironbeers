import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import logo from './logo.png'

const Header = () => {

    return (
        
        <Navbar bg="dark" className="justify-content-center">
            <Link to='/'>
                <Navbar.Brand>
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="align-center"
                    alt="home"
                />
                </Navbar.Brand>
            </Link>
        </Navbar>
    )
}

export default Header