import React from "react";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const BeerCards = ({
  _id,
  name,
  tagline,
  first_brewed,
  description,
  image_url
}) => {
  return (
    <Col className="beer-card" md={4}>
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <small>
        first Brewed: {first_brewed} | Tagline: {tagline}
      </small>
      <br></br>
      <Link className="btn btn-sm btn-dark" to={`/beers/${_id}`}>
        Ver detalles
      </Link>
    </Col>
  );
};

export default BeerCards;
