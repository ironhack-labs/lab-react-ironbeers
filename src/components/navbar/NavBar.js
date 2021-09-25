import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar bg="dark">
      <Container className="d-flex justify-content-center">
        <Link to="/">
          <i className="fas fa-beer" />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
