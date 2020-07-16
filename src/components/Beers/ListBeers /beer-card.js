import React from 'react';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const BeerCard = ({ _id, image, name, tagline, contributed_by }) => {
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Link to={`/beers/${_id}`}>{name}</Link>
          <Card.Text>{tagline}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{contributed_by}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BeerCard
