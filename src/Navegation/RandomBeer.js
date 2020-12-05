import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/random-beer" className="df-jc-ac">
        <button className="btn">Other Beer</button>
      </Link>
    </div>
  );
}

export default RandomBeer;
