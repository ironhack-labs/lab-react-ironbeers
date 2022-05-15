import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {randomBeer ? (
        <div>
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <h3>{randomBeer.name}</h3>
          <p>
            <b>Tagline:</b> {randomBeer.tagline}
          </p>
          <p>
            <b>First brewed:</b> {randomBeer.first_brewed}
          </p>
          <p>
            <b>Attenuation level:</b> {randomBeer.attenuation_level}
          </p>
          <p>
            <b>Description:</b> {randomBeer.description}
          </p>
          <p>
            <b>Contributed by:</b> {randomBeer.contributed_by}
          </p>
          <p>
            <b></b>
          </p>
        </div>
      ) : (
        "....Loading!"
      )}
    </>
  );
}

export default RandomBeer;
