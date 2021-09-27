import React from 'react';
import { Col, Card, Row, Container } from 'react-bootstrap';
import allBeersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container>
      <div className="ironbeers">
        <h1>Ironhack Beers</h1>
      </div>
      <Row xs={1} md={2} className="">
        <Col>
          <Card>
            <Card.Img variant="top" src={allBeersImage} />
            <Card.Body>
              <Card.Title>
                <Link to={'/allBeers'}>All Beers</Link>
              </Card.Title>
              <Card.Text>Lorem Ipsum</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={randomBeerImage} />
            <Card.Body>
              <Card.Title>
                <Link to={'/beerDetails/random'}>Random Beer</Link>
              </Card.Title>
              <Card.Text>Lorem Ipsum</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={newBeerImage} />
            <Card.Body>
              <Card.Title>
                <Link to={'/newBeerPage'}>New Beer</Link>
              </Card.Title>
              <Card.Text>Lorem Ipsum</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
