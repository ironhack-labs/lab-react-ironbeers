import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setRandomBeer(response.data);
        setFetching(false);
      });
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center">Random Beer</h2>
      <div className="mt-4">
        {!randomBeer && <h3>Beer not found!</h3>}
        {randomBeer && (
          <div className="d-flex gap-5">
            <img className="beer-image" src={randomBeer.image_url} />
            <div className="border rounded bg-light p-4">
              <h3>{randomBeer.name}</h3>
              <br />
              <p>{randomBeer.tagline}</p>
              <p>First Brewed: {randomBeer.first_brewed}</p>
              <p>Attenuation Level: {randomBeer.attenuation_level}</p>
              <p>{randomBeer.description}</p>
              <p>Created by: {randomBeer.contributed_by}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RandomBeersPage;
