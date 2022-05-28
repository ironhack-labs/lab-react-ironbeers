import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  const getRandomBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
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
      <section className="single-beer-section">
        {randomBeer && (
          <>
            <img src={randomBeer.image_url} alt="randomBeer-img" />
            <div className="single-beer-info">
              <div className="single-beer-name-and-tagline">
                <h4>{randomBeer.name}</h4>
                <h6>{randomBeer.attenuation_level}</h6>
              </div>
              <div className="single-beer-attenuation-and-firstbrewed">
                <h5>{randomBeer.tagline}</h5>
                <h6>{randomBeer.first_brewed}</h6>
              </div>
              <p>{randomBeer.description}</p>
              <h6>{randomBeer.contributed_by}</h6>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default RandomBeerPage;
