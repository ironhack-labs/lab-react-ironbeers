import React from "react";
import Header from "../../components/Header/Header";

const RandomBeer = ({ randomBeer }) => {
  return (
    <>
      <Header />
      <div className="beer-detail-container">
        <div className="beer-detail-info">
          <div key={randomBeer._id} className="beer-detail">
            <img
              src={randomBeer.image_url}
              alt="single-beer"
              className="beer-img"
            />
            <h2 className="beer-title-info">Name: {randomBeer.name}</h2>
            <p className="beer-tagline-info">{randomBeer.tagline}</p>
            <h3 className="beer-title-info">
              First Brewed:{randomBeer.first_brewed}
            </h3>
            <p>{randomBeer.attenuation_level}</p>
            <p className="beer-description">
              <strong>Description:</strong>
              {randomBeer.description}
            </p>
            <span>
              <strong>Contributed by:</strong>
              {randomBeer.contributed_by}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomBeer;
