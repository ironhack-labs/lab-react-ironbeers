import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsFillHouseDoorFill} from 'react-icons/bs'

export default function Navigation() {
  return (
    <Navbar bg="primary" className="text-white mb-2" expand="md">
      <Container fluid>
        <Navbar.Brand href="/">
          <BsFillHouseDoorFill/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}