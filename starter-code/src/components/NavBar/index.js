import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">Ironbeer's!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as="div"> <Link to="/">Inicio</Link></Nav.Link>
                        <Nav.Link as="div"> <Link to="/beers">Lista de Cervezas</Link></Nav.Link>
                        <Nav.Link as="div"> <Link to="/beers/random">Random</Link></Nav.Link>
                        <Nav.Link as="div"> <Link to="/beers/new">Nuevas</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation