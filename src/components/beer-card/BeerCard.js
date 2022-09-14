import React from "react";
import { Link } from "react-router-dom";

function BeerCard({ image_url, name, tagline, contributed_by, url }) {
  return (
    <Link to={url} className="text-decoration-none">
      <div className="card mb-3" style={{ maxHeight: 5400 }}>
        <div className="row g-0">
          <div className="col-md-5 col-sm-3 col-sx-2">
            <img
              src={image_url}
              className="img-fluid rounded-start m-5 align-self-center"
              alt={name}
              style={{ maxHeight: 220 }}
            />
          </div>
            <div className="col-md-7 col-sm-9 col-sx-10">
              <div className="card-body mt-2">
                <h3 className="card-title text-dark">{name}</h3>
                <br />
                <h5 className="card-text text-secondary">{tagline}</h5>
                <br />
                <p className="card-text text-dark fw-bold">Created by:</p>
                <p className="text-dark">{contributed_by}</p>
              </div>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default BeerCard;
