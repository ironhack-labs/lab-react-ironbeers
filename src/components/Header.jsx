import React from  'react'
import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'

function Header (props) {
    return (
        <Navbar  bg="primary"  expand="lg">
            <Navbar.Toggle  aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse  id="basic-navbar-nav">
                <Nav  className="mr-auto">
                    <Link  to="/">Beers</Link>
                    <Link  to="/random-beer">Random Beer</Link>
                    <Link  to="/New-beer">New Beer</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }


export default Header