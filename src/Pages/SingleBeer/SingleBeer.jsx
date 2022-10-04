import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

const SingleBeer = ({ beerData }) => {
  console.log(beerData);
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className="beer-detail-container">
        <div className="beer-detail-info">
          {beerData
            .filter((beer) => {
              return beer._id === id;
            })
            .map((beer) => {
              return (
                <div key={beer._id}>
                  <img
                    src={beer.image_url}
                    alt="single-beer"
                    className="beer-img"
                  />
                  <h2 className="beer-title-info">Name: {beer.name}</h2>
                  <p className="beer-tagline-info">{beer.tagline}</p>
                  <h3 className="beer-title-info">
                    First Brewed:{beer.first_brewed}
                  </h3>
                  <p>{beer.attenuation_level}</p>
                  <p className="beer-description">
                    <strong>Description:</strong>
                    {beer.description}
                  </p>
                  <span>
                    <strong>Contributed by:</strong>
                    {beer.contributed_by}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SingleBeer;
