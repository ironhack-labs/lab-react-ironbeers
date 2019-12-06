import React from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const BeerCard = ({
  _id, image_url, name, tagLine, contributed_by
}) => {
  return (
    <Col className="beer-card" md={4}>
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
      <p>{tagLine}</p>
      <small>{contributed_by}</small>
      <br></br>
      <Link className="btn btn-sm btn-dark" to={`/${_id}`}>
        Ver detalles
      </Link>
    </Col>
  );
};

export default BeerCard;
