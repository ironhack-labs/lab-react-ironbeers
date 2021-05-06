import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import './App.css';
import { Link } from 'react-router-dom'
import beersImage from './../assets/beers.png'
import newBeer from './../assets/new-beer.png'
import randomBeer from './../assets/random-beer.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navigation/Navigation';



function App() {
  return (
    <Container>
      <Row>
        <Col md={8} className="homePage">
          <header>
            <h1>Home Page</h1>
          </header>
          <section>
            <img src={beersImage} />
            <Link to="/beers"><h2>All beers</h2></Link>
            <p>lorem ipsum fasfdsa</p>
          </section>
          <section>
            <img src={newBeer} />
            <Link to="/random-beer"><h2>Random beer</h2></Link>
            <p>lorem ipsum fasfdsa</p>
          </section>
          <section>
            <img src={randomBeer} />
            <Link to="/new-beer"><h2>New beer</h2></Link>
            <p>lorem ipsum fasfdsa</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
