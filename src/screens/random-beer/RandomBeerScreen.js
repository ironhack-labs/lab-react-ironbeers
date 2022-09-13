import React from "react";
import HomeButton from "../../components/home-button/HomeButton";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RandomBeerScreen() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => {
        console.log("res.data", res.data);
        setRandomBeer(res.data);
      });
  }, []);

  return (
    <>
      <HomeButton />
      <div className="container m-2 text-center">
        <img className="img-size  mb-3" src={randomBeer.image_url} alt={randomBeer.name} />
        <div className="d-flex justify-content-between">
          <h2>{randomBeer.name}</h2>
          <h2 className="text-secondary">{randomBeer.attenuation_level}</h2>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="text-secondary">{randomBeer.tagline}</h5>
          <p>
            <strong>{randomBeer.first_brewed}</strong>
          </p>
        </div>
        <p>{randomBeer.description}</p>
        <p>
          <strong>{randomBeer.contributed_by}</strong>
        </p>
      </div>
    </>
  );
}
