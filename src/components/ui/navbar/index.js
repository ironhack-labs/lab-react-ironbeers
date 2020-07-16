import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
            <Navbar.Brand href="/">IronBeers_</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation 