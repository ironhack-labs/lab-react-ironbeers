import { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './Details';

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        setBeer(response.data);
      });
  }, []);

  if(!beer) {
    return <p>Loading...</p>;
  }

  return <Details beer={beer} />;
}

export default RandomBeer;