import React from "react";
import { useParams, Link } from "react-router-dom";

const SingleBeer = ({ beers }) => {
  let { beerId } = useParams();
  if (!beers) {
    return <p>loading...</p>;
  }
  let beer = beers.find((element) => {
    //console.log(typeof element._id, typeof beerId);
    return element._id === beerId;
  });

  return (
    <>
      <header>
        <Link to="/">
          <img src={require("../assets/header_home.png")} alt="header"></img>
        </Link>
      </header>
      <div className="singleBeer">
        <img src={beer.image_url} alt="beer" width="200px" />
        <h1>
          {beer.name} {beer.attenuation_level}
        </h1>

        <h2>
          {beer.tagline} {beer.first_brewed}
        </h2>
        <p>{beer.description}</p>
        <p>Created by: {beer.contributed_by}</p>
      </div>
    </>
  );
};

export default SingleBeer;
