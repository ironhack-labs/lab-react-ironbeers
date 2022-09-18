import React from "react";

function BeerDetail({
  image_url,
  name,
  attenuation_level,
  tagline,
  first_brewed,
  description,
  contributed_by,
}) {

  return (
    <div className="container" style={{ height: 500, width: 500 }}>
      <div className="card">
          <img
            src={image_url}
            className="card-img-top align-self-center mt-3"
            alt={name}
            style={{ height: 270, width: 90 }}
          />
          <div className="card-body">
            <div className="d-flex justify-content-between px-3">
              <h2>{name}</h2>
              <h4 className="text-secondary">{attenuation_level}</h4>
            </div>
            <div className="d-flex justify-content-between px-3">
              <h4 className="text-secondary">{tagline}</h4>
              <h5>{first_brewed}</h5>
            </div>

            <div className="card-text fw-bold">
              <p className="p-3"><b>{description}</b></p>
              <p className="text-muted px-3"><b>{contributed_by}</b></p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default BeerDetail;
