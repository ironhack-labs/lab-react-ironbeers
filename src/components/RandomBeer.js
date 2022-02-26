import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./RandomBeer.css";

export default function RandomBeer(props) {
  props.displayHeader(true);

  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    Axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((beer) => {
        setRandomBeer(beer.data);
      })
      .catch((err) => console.log("Can't get random beer from API ", err));
  }, []);

  return (
    <div className="detailsContainer">
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <div className="detailsText">
        <h2>{randomBeer.name}</h2>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}
