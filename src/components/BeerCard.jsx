import React from "react";

function BeerCard({ beer }) {
  const getContributor = (name) => {
    return name.split(" ")[0];
  };

  return (
    <div
      className="card mb-3 p-3 d-flex flex-row gx-3 align-items-center"
      style={{ width: "18rem", height: "9rem" }}
    >
      <img
        src={beer.image_url}
        className="card-img-top"
        alt="Beer"
        style={{ height: "81px", width: "42px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.tagline}</p>
        <p className="font-weight-bold">
          Created by:{getContributor(beer.contributed_by)}
        </p>
      </div>
    </div>
  );
}

export default BeerCard;
