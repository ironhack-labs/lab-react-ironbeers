import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Row className='justify-content-md-center'>
            <Nav>
              <Nav.Item>
                <Nav.Link className='h1' href='/'>
                   ⌂
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
        </Container>
      </Navbar>
    );
  }
}
