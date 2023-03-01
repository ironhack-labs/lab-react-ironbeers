import { Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function BeerCard({ _id, image_url, name, tagline, contributed_by }) {
  return (
    <div className="beersCard">
      <Col sm={{ span: 24 }} md={{ span: tagline ? 15 : 12 }} lg={{ span: 24 }}>
        <Link to={`/${_id}`}>
          <div className="card" hoverable="true">
            <img className="imgBeer" alt={name} src={image_url} />
            <div>
              <h2>{name}</h2>
              <p>{tagline}</p>
              <p>Created by:{contributed_by}</p>
            </div>
          </div>
        </Link>
      </Col>
    </div>
  );
}

export default BeerCard;