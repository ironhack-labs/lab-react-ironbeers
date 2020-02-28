import React from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const BeersCard = ({ name, image_url, _id, tagline, contributed_by }) => {
  return (
    <Col md={4}>
      <Card className="card-rusa">
        <Card.Body>
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>

          <Card.Img variant="top" src={image_url} />
          <Card.Text>{tagline}</Card.Text>
          <Card.Text>Created by: {contributed_by}</Card.Text>
          <Button as="div" variant="dark" size="sm">
            <Link to={`/beers/${_id}`}>Detalles</Link>
          </Button>
          <hr></hr>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BeersCard;
