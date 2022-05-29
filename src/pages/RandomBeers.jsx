import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
function RandomBeers() {
  const [random, setRandom] = useState(null);
  const getRandom = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandom(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandom();
  }, []);
  return (
    <div>
      <Header/>
      <h2>Random Beers</h2>
      {random && (
        <div>
          <img src={random.image_url} alt="beer" />
          <h6>Name:{random.name}</h6>
          <h6>Tagline:{random.tagline}</h6>
          <h6>Contributed by:{random.contributed_by}</h6>
          <h6>First brewed:{random.first_brewed}</h6>
          <h6>Attenuation level:{random.attenuation_level}</h6>
          <h6>Description:{random.description}</h6>
          <h6>First brewed:{random.first_brewed}</h6>
        </div>
      )}
    </div>
  );
}

export default RandomBeers;
