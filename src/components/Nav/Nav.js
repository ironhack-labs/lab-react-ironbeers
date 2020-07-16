import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './../App.css'


const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
            <Navbar.Brand href="/">BeersApp_</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/beers">Beers</Nav.Link>
                    <Nav.Link href="/beers/random">Random</Nav.Link>
                    <Nav.Link href="/beers/new">New beer</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation