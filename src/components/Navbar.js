import React from 'react';

import { Navbar } from 'react-bootstrap'
import logo from './hogar.png'

import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" style={{ marginBottom: 30 }}>
            <Link to="/">
                <Navbar.Brand> <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}</Navbar.Brand>
            </Link>

        </Navbar >
    )
}

export default Navigation