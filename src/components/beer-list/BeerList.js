import React from "react";
import { Link } from "react-router-dom";

function BeerList({ image_url, name, tagline, contributed_by, _id }) {
  return (
    <Link to={`/${_id}`} className="text-decoration-none">
      <div className="card" style={{height:"12rem"}}>
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={image_url}
              className="img-fluid rounded-start mt-3"
              alt={name}
              style={{ width: "40px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body mt-4">
              <h5 className="card-title text-dark fw-bold">{name}</h5>
              <p className="card-text text-muted fw-bold">{tagline}</p>
              <p className="card-text text-dark">
                <small className="text-dark"><b>Created by:</b> {contributed_by}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BeerList;
