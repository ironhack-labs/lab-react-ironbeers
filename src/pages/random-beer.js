import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setTimeout(()=>{axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((result) => {
        setRandomBeer(result.data);
        setFetching(false);
      });},2000)
  }, []);

  console.log('consol:',randomBeer);

  return (
    <div>
      {fetching && (
        <div className="loading">
          <h1>Looking for your perfect beer!</h1><h1 className="beer-loading">🙈</h1>
        </div>
      )}
      <div className="beer-card">
            <img src={randomBeer.image_url}/>
            <h1>{randomBeer.name}</h1>
            <h3>{randomBeer.tagline}</h3>
            <p>{randomBeer.description}</p>
            <a className="back-button" href="/">Back</a>
      </div>
    </div>
  );
}

export default RandomBeer;