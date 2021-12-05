import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const api = async () => {
      const randomBeer = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      setRandomBeer(randomBeer.data);
      setLoaded(true);
    };
    api();
  }, []);

  return (
    loaded && (
      <>
        <Link className="text-decoration-none m-2" to="/">
          <button className="btn btn-block btn-lg btn-success m-5">Home</button>
        </Link>
        <div>
          <img
            className="m-3"
            src={randomBeer.image_url}
            alt={randomBeer.name}
            width="100"
          />
          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p className="m-2">{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </>
    )
  );
};

export default RandomBeer;
