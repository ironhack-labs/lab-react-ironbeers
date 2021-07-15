import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from './Navbar'

import beersImage from './../assets/beers.png'
import newBeer from './../assets/new-beer.png'
import randomBeer from './../assets/random-beer.png'


function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col md={12}>
            <h1>Home</h1>
            <img src={beersImage} />
            <Link to="/beers">
              <h3>Beers</h3>
            </Link>
          </Col>
          <Col md={12}>
            <img src={newBeer} />
            <Link to="/random-beer">
              <h3>Random beer</h3>
            </Link>
          </Col>
          <Col md={12}>
            <img src={randomBeer} />
            <Link to="/new-beer">
              <h3>New beer</h3>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App
