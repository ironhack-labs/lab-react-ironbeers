import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import beers from '../../../assets/beers.png';
import random from '../../../assets/random-beer.png';
import newBeer from '../../../assets/new-beer.png';
import './IndexCard.css';

const IndexCard = ({ imageUrl, title, description }) => {
  const imagesDict = { beers, random, newBeer };
  return (
    <section className="card-section">
      <img src={imagesDict[imageUrl]} alt="beers"></img>
      <Container>
        <Row>
          <Col md={8}>
            <h2>{title}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default IndexCard;
