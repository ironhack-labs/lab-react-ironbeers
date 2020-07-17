import React from 'react';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CoasterCard = ({ _id, title, imageUrl }) => {
  return (
    <Col md={4}>
      <Card className="coaster-card">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Link
            to={`/coasters/${_id}`}
            className="btn btn-dark btn-block btn-sm"
          >
            Ver detalles
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CoasterCard;
