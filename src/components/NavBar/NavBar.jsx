import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (

        <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
            <Navbar.Brand href="#home">Beers App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/">
                        <Nav.Link as="span">Home</Nav.Link>
                    </Link>
                    <Link to="/beers">
                        <Nav.Link as="span">Beers List</Nav.Link>
                    </Link>
                    <Link to="/beers/random">
                        <Nav.Link as="span">Random Beer</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar