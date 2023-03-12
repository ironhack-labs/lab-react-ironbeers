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
      <div className="more-details">
        <img
          src={randomBeer.image_url}
          alt={randomBeer.name}
          className="single-beer-img"
        />
        <div className="details">
          <div className="details-header">
            <h1>{randomBeer.name}</h1>
            <h2>{randomBeer.tagline}</h2>
          </div>

          <div className="details-numbers">
            <h1>{randomBeer.attenuation_level}</h1>
            <h3>{randomBeer.first_brewed}</h3>
          </div>
        </div>

        <p className="details-description">{randomBeer.description}</p>
        <p className="contributor">
          <b>{randomBeer.contributed_by}</b>
        </p>
      </div>
    </div>
  );
}

export default RandomBeer;
