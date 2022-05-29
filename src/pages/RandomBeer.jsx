import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar
 from "../components/Navbar";
function RandomBeer() {
  const [beers, setBeers] = useState([]);

  const getAllBeers = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      <Navbar />
        <img className="beerimg" src={beers.image_url} alt="beerimg" />
        <h3>{beers.name}</h3>
        <p>{beers.tagline}</p>
        <p>{beers.first_brewed}</p>
        <p>{beers.attenuation_level}</p>
        <p>{beers.description}</p>
        <p>{beers.contributed_by}</p>
      
    </div>
  );
}

export default RandomBeer;
