import React, { useEffect, useState } from "react";
import { getRandomBeer } from "../../services/beersService";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState();

  useEffect(() => {
    getRandomBeer().then((beer) => setRandomBeer(beer));
  }, []);

  return (
    <>
      {randomBeer ? (
        <div className="d-flex container my-4 align-items-center justify-content-center pb-3 border-bottom">
          <img
            src={randomBeer.image_url}
            alt="beerImage"
            style={{ width: 50 }}
          />
          <div className="ms-5">
            <h3>{randomBeer.name}</h3>
            <h5 className="text-secondary">{randomBeer.tagline}</h5>
            <h5 className="text-dark">{randomBeer.first_brewed}</h5>
            <h5 className="text-dark">{randomBeer.attenuation_level}</h5>
            <h5 className="text-dark">{randomBeer.description}</h5>
            <p className="text-secondary">{randomBeer.contributed_by}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}{" "}
    </>
  );
}

export default RandomBeer;
