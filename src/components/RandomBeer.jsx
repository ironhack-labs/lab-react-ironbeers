import React from "react";
import { Link } from "react-router-dom";

const RandomBeer = ({ beers }) => {
  if (!beers) {
    return <p>loading...</p>;
  }
  const randomIndex = Math.floor(Math.random() * beers.length);

  // get random item
  const beer = beers[randomIndex];
  console.log(beer);

  <header>
    <Link to="/">
      <img src={require("../assets/header_home.png")} alt="header"></img>
    </Link>
  </header>;
  return (
    <div className="random-beer">
      <img src={beer.image_url} alt="beer" width="200px" />
      <h1>
        {beer.name} {beer.attenuation_level}
      </h1>

      <h2>
        {beer.tagline} {beer.first_brewed}
      </h2>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
