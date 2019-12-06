import React from "react";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const BeerCard = ({ _id, contributed_by , name, tagline, image_url}) => {
  return (
    <Col  md={4}>
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>{tagline}</p>
      <p>{contributed_by}</p>

      <br></br>
      <Link className="btn btn-sm btn-dark" to={`/${_id}`}>
        Ver detalles
      </Link>
    </Col>
  );
};

export default BeerCard;
