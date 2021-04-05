import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
        <Navbar bg="dark">
            <Navbar.Brand href="/">
            <div className="Header">
            <i className="fas fa-home fa-2x"></i>
            </div>
            </Navbar.Brand>
        </Navbar>
  );
}

export default Header;