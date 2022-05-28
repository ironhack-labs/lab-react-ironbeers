import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

function RandomBeers() {
  const [randomBeer, setRandomBeer] = useState(null);

  const getRandomBeer = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <div>
      <Header />
      {randomBeer && (
        <div className="detailsBox">
          <img src={randomBeer.image_url} alt="beersImg" />
          <div className="detailsContainer">
            <div className="detailsHeader">
              <div>
                <h2>{randomBeer.name}</h2>
                <h4>
                  <span>{randomBeer.tagline}</span>
                </h4>
              </div>
              <div>
                <p>
                  <span>{randomBeer.attenuation_level}</span>
                </p>
                <p>
                  <b>{randomBeer.first_brewed} </b>
                </p>
              </div>
            </div>

            <p>{randomBeer.description}</p>
            <p>
              <span>{randomBeer.contributed_by} </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomBeers;
