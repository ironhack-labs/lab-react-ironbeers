import React from "react";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const BeerCard = ({ _id, tagline, name, image_url, contributed_by }) => {
  return (
    <Col className="beer-card" md={4}>
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>{tagline}</p>
          <b>{contributed_by}</b>
          <br/>
      <Link className="btn btn-sm btn-dark" to={`/beer/${_id}`}>
        Ver detalles
      </Link>
    </Col>
  );
};

export default BeerCard;
