import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar bg="light" variant="light" expand="md" style={{ marginBottom: '30px' }}>
            <Navbar.Brand href="#home">Lab_React_IronB&&rs</Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/">All the Beers</Link>
                    <Link className="nav-link" to="/">Random Beer</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation