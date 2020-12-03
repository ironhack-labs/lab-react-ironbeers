import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <Navbar bg="dark">
            <Navbar.Brand>
                <Link to={'/'}>Home</Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar