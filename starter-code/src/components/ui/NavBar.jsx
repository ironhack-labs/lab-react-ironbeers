import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

const Navigation = (props) => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">IronBeers!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as="div"> <Link to="/">Show all</Link></Nav.Link>
                    <Nav.Link as="div"> <Link to="/random">Show Random</Link></Nav.Link>
                    <Nav.Link as="div"> <Link to="/new">New Beer</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
    
}

export default Navigation