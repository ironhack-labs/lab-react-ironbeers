import React from "react";

function DetailBeer({
  image_url,
  name,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by,
}) {
  return (
    <>
        <div className="card">
          <img
            src={image_url}
            className="card-img-top align-self-center mt-3"
            alt={name}
            style={{ height: 280, width: 100 }}
          />
          <div className="card-body">
            <div className="d-flex justify-content-between px-4">
              <h2>{name}</h2>
              <h4 className="text-secondary">{attenuation_level}</h4>
            </div>
            <div className="d-flex justify-content-between px-4">
              <h3 className="text-secondary">{tagline}</h3>
              <h4>{first_brewed}</h4>
            </div>

            <div className="card-text fw-bold">
              <p className="p-4">{description}</p>
              <br />
              <p className="text-muted px-4">{contributed_by}</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default DetailBeer;
