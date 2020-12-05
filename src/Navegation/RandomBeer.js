import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BeerDetails from './BeerDetails';

function RandomBeer(props) {
  const [random, setRandom] = useState({});

  useEffect(() => {
    async function getRandomId() {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      setRandom(response.data._id);
    }
    getRandomId();
  }, [props]);

  return (
    <div>
      <BeerDetails match={{ params: { id: random } }} />
    </div>
  );
}

export default RandomBeer;
