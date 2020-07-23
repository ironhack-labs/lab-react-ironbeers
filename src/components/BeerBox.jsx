import React from 'react';

const BeerBox = (props) => {
  const { name, image, tagline, contributor } = props;

  return (
    <div className="BeerBox flex">
      <div className="img-box">
        <img className="beer-img" src={image} alt="beer pic" />
      </div>

      <div className="text-side">
        <h2 className="beer-name">{name}</h2>
        <p className="beer-tagline">{tagline}</p>
        <p className="beer-contributor">Contributed by : {contributor}</p>
      </div>
    </div>
  );
};

export default BeerBox;
