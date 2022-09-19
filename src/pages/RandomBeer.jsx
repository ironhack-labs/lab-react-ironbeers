import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import BeerDetails from './BeerDetails';

function RandomBeer({beersList}) {
  const [ randomBeer, setRandomBeer ] = useState(0);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then (response => {
        if (response.data)
          setRandomBeer(response.data._id);
      });
  }, []);

  return (
    <BeerDetails beersList={beersList} randomBeerId={randomBeer}/>
  );
}

export default RandomBeer;