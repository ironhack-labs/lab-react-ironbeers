import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Navbar} from 'react-bootstrap';

function Navigation() {
  return (
    <div>
      <Navbar bg="blue">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
