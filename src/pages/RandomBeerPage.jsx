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
    <div>
      {!randomBeer && <h3>Beer not found!</h3>}
      {randomBeer && (
        <div>
          <img src={randomBeer.image_url} />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeersPage;
