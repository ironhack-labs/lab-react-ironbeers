import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './home.png'

const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" className="justify-content-center">
            <Navbar.Brand>
                <Link to="/">
                    <img
                    alt="Home"
                    src={logo}
                    width="30"
                    height="30"
                />
                </Link>
                </Navbar.Brand>
        </Navbar>
    )
}

export default Navigation