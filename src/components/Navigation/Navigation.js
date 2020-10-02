import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top" >
            <Navbar.Brand href='/'>INICIO</Navbar.Brand>
        </Navbar>
    )
}

export default Navigation