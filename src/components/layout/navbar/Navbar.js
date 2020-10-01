import React from 'react'
import { Link } from 'react-router-dom'

// React Bootstrap
import Navbar from 'react-bootstrap/Navbar'

export default () => {

    return (
        <Navbar className="justify-content-center" variant="dark" expand="lg" style={{ marginBottom: '40px', backgroundColor: '#4cc4fc' }}>
            <Link to="/">
                <Navbar.Brand>
                Home
                </Navbar.Brand>
            </Link>
        </Navbar>
    )

}