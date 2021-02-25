import React from 'react'


import { Navbar } from 'react-bootstrap'
import homeIcon from '../../assets/homeicon.png'

import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ marginBottom: 20 }}>
            <Link to="/">
                <Navbar.Brand> <img
                    alt=""
                    src={homeIcon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /></Navbar.Brand>
            </Link>
        </Navbar>

    )
}

export default Header