import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {

    return (
        <Navbar className="justify-content-center" bg="dark" variant="dark" sticky="top">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default Navigation