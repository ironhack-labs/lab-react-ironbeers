import React from "react";

function BeerDetailCard({beer}) {
  return (
    <>
      {!beer && <span className="text-center">Loading Beer Details</span>}
      {beer && (
        <section className="text-center d-flex flex-column align-items-center py-5">
          <div className="container">
            <img
              src={beer.image_url}
              style={{ height: "20rem" }}
              className="mb-5"
              alt={beer.name}
            />
            <div className="name mb-3">
              <h3>
                <span className="fs-3">{beer.name}</span>
                <span className="ms-5 fw-light">{beer.attenuation_level}</span>
              </h3>
            </div>
            <div className="tag mb-3">
              <span className="fs-5">{beer.tagline}</span>
              <span className="ms-5 fw-bold">{beer.first_brewed}</span>
            </div>
            <div className="description mb-3">
              <p className="text-dark w-50 mx-auto">{beer.description}</p>
            </div>

            <div className="creator fw-medium text-left">
              <p>{beer.contributed_by}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default BeerDetailCard;
