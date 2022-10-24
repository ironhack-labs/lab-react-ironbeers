import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

function RandomBeer() {
  const [random, setRandom] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setRandom(response.data);
      })
      .catch((e) => console.log('error getting random beer from API', e));
  }, []);

  return (
    <div>
      <Header />
      <img src={random?.image_url} alt={random.name} />
      <h2>{random.name}</h2>
      <p>{random.tagline}</p>
      <p>{random.first_brewed}</p>
      <p>{random.attenuation_level}</p>
      <p>{random.description}</p>
      <p>{random.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
