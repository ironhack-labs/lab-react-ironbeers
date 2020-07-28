import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="/"><i className="fas fa-home"></i></NavLink>
                            <NavLink to="/newBeer"><i className="fas fa-plus"></i></NavLink>
                            <NavLink to="/randomBeer"><i className="fas fa-random"></i></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

