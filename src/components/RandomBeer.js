import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import OneBeer from './OneBeer';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});
  const [loaded, setLoaded] = useState(false);

  function getRandomBeer() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((beerData) => {
        setRandomBeer(beerData.data);
      })
      .catch((error) => console.error(`Something went wrong: ${error}`));
  }

  if (loaded) {
    return (
      <div>
        <Header />
        <div className="beerWrapper">
          <OneBeer beer={randomBeer} />
        </div>
      </div>
    );
  } else {
    getRandomBeer();
    setLoaded(true);
    return (
      <div>
        <Header />
        <div>Loading beer</div>
      </div>
    );
  }
}

export default RandomBeer;
