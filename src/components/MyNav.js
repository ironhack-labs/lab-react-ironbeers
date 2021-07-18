import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default class MyNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
