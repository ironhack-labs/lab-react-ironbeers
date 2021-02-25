import React from 'react';
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function Navbar() {
  return (
    <Nav className="justify-content-center">
    <Nav.Item>
      <NavLink to={"/"}>Home</NavLink>
    </Nav.Item>
    </Nav>
  );
}

export default Navbar;