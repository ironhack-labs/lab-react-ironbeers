import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import house from './Untitled.png';

export default function HomeBar() {
  return (
    <Navbar bg="primary" expand="sm">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <Image
              src={house}
              width="30"
              height="30"
              className="d-inline-block align-top "
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
