import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

function RandomBeer() {
  // const {beerId} = useParams()
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log(response.data);
        setRandomBeer(response.data);
      })
      .catch((error) => console.log("Error retrieving random beer", error));
  }, []);

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        <img
          src={randomBeer.image_url}
          alt={randomBeer.name}
          id="single-beer-img"
        />
        <h1>{randomBeer.name}</h1>
        <h2>{randomBeer.tagline}</h2>
        <h3>{randomBeer.first_brewed}</h3>
        <h1>{randomBeer.attenuation_level}</h1>
        <p>{randomBeer.description}</p>
        <p>
          <b>{randomBeer.contributed_by}</b>
        </p>
      </div>
    </div>
  );
}

export default RandomBeer;
