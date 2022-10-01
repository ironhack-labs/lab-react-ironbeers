import React from "react";

const BeerInfo = ({ beer, navigate }) => {
  return (
    <div
      className="beer-info"
      onClick={() => {
        navigate(`/beers/${beer._id}`);
      }}
    >
      <div>
        <img src={beer.image_url} alt="beer" className="beer-img" />
      </div>
      <div>
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default BeerInfo;
