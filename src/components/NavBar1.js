import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

function Navbar1() {
  return (
    <>
      <Navbar bg="light">
        <Container className="containerNavbar">
          <Navbar.Brand href="/">
            <img
              src="/logo.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navbar1;
