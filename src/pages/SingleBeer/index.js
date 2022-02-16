import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./SingleBeer.css";

const axios = require("axios");

function SingleBeer() {
  const [beerData, setBeerData] = useState([]);
  const params = useParams();

  const { id } = params;
  console.log("ID BEER", id);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setBeerData(response.data);
      })
      .catch((err) => console.log("Error en fetching api on App.js", err));
  }, []);
  return (
    <div className="single-beer-container">
      <img
        className="single-beer-img"
        src={beerData.image_url}
        alt={beerData.name}
      />
      <h2>{beerData.name}</h2>
      <p>{beerData.tagline}</p>
      <p>{beerData.first_brewed}</p>
      <p>{beerData.attenuation_level}</p>
      <p>{beerData.description}</p>
      <p>{beerData.contributed_by}</p>
    </div>
  );
}

export default SingleBeer;
