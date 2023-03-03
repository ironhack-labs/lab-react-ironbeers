import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function RandomBeer() {
  const [beer, setBeer] = useState([]);

  const randomBeer = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      setBeer(
        response.data[randomIntFromInterval(0, response.data.length - 1)]
      );
      console.log(beer);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    randomBeer();
  }, []);

  return (
    <div>
    <NavBar />
      {beer && (
        <div>
          <img src={beer.image_url} alt="" />
          <p>{beer.name}</p>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
