import React from 'react';
import {Navbar} from 'react-bootstrap';
import {HouseDoorFill} from 'react-bootstrap-icons';

export default function Nav() {
    return (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">
            <HouseDoorFill
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Home"
            />
        </Navbar.Brand>
    </Navbar>
    )
}
