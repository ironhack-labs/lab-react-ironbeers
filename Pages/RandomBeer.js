import React from "react";
import { Link } from "react-router-dom";
import HomeHead from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";
import axios from "axios";
import { useState, useEffect } from "react";

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      });
  }, []);

  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={HomeHead} />
        </Link>
      </header>
      <div className="random">
        <img src={randomBeer.image_url}></img>
        <h2>{randomBeer.name}</h2>
        <h3>{randomBeer.tagline}</h3>
        <p className="brewed"> {randomBeer.first_brewed} </p>
        <p className="attenuation"> {randomBeer.attenuation_level}</p>
        <p className="description"> {randomBeer.description} </p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </>
  );
};

export default RandomBeer;