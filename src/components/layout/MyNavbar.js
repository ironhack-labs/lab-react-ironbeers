import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navigation
