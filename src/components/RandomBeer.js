import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Spinner from "./Spinner";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/beers/random`)
      .then((randomBeer) => setRandomBeer(randomBeer.data))
      .catch((err) => console.log(err));
  }, []);

  const renderRandomBeer = () => {
   return  <div className="main">
    <img className="beer-photo" src={randomBeer.image_url} alt={randomBeer.name + "image"} />
    <div className="beer-header">
      <div className="left">
        <h2>{randomBeer.name}</h2>
        <h3>{randomBeer.tagline}</h3>
      </div>
      <div className="right">
        <h3>{randomBeer.attenuation_level}</h3>
        <p>{randomBeer.first_brewed}</p>
      </div>
    </div>
    <div className="beer-content">
      <p>{randomBeer.description}</p>
      <h5>{randomBeer.contributed_by}</h5>
    </div>
  </div>
  }
  return (
    <div className="page-content">
      <Header />
    {randomBeer ? renderRandomBeer() : <Spinner/>}
    </div>
  );
}

export default RandomBeer;
