import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  const getRamdomBeer = async () => {
    try {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRamdomBeer();
  }, []);

  return (
    <div className="card">
      {randomBeer && (
        <>
          <img src={randomBeer.image_url} alt="randomBeer" />
          <h3>{randomBeer.name}</h3>
          <h4>{randomBeer.tagline}</h4>
          <p>First brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>Contributed by: {randomBeer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default RandomBeerPage;
