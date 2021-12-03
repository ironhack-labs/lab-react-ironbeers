import React from "react";
import Header from "./../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const APIURL = "https://ih-beers-api2.herokuapp.com/beers/";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APIURL + "random");
        const randomBeerData = response.data;

        setRandomBeer(randomBeerData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Random</h1>
      <div className="beer-div">
        <img src={randomBeer.image_url} alt="beer" />
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>Attenuation level {randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p> Created by: {randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeerPage;
