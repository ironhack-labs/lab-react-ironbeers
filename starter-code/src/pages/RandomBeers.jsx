import React, { useState, useEffect } from "react";
import NavMain from "./NavMain";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers/random")
      .then(response => {
        setRandomBeer(response.data);
        console.log(response);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="container">
      <NavMain />
      <div className="onebeer">
        <div className="imgcontainer">
          <img src={randomBeer.image_url} alt={randomBeer.name} />
        </div>
        <h1>{randomBeer.name}</h1>
        <span className="attenuation">{randomBeer.attenuation_level}</span>
        <h2>{randomBeer.tagline}</h2>
        <span className="firstbrew">{randomBeer.first_brewed}</span>
        <p>{randomBeer.description}</p>
        <p className="contributor">{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeer;
