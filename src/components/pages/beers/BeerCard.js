import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';
import './BeerCard.css';

const BeerCard = ({ image_url, name, tagline }) => (
  <Card>
    <Row>
      <Col xs={4}>
        <Card.Img className="beer-img" variant="top" src={image_url} />
      </Col>
      <Col xs={8}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{tagline}</Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);
export default BeerCard;
