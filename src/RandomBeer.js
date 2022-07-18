import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RandomBeer() {
  const [beer, setBeer] = useState("");

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header className="App-header">
        <Link to="/">🏡</Link>
      </header>
      <div key={beer._id} style={{ padding: "1rem", textAlign: "center" }}>
        <img
          src={beer.image_url}
          alt="product-shot"
          className="beer-shot-detail"
        />
        <h1>{beer.name}</h1>
        <p className="tagline">{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p className="beer-description">{beer.description}</p>
        <p className="contributor">
          <strong>{beer.contributed_by}</strong>
        </p>
      </div>
    </>
  );
}
export default RandomBeer;
