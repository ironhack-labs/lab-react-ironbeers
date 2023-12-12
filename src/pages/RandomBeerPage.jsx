import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching random beer:', error);
      });
  }, []);

  if (!randomBeer) {
    return <p className='loading'>Loading...</p>;
  }

  return (
    <div className='beer-details-container'>
      <img src={`${randomBeer.image_url}`} alt={`photo of ${randomBeer.name}`} />
      <div className='beer-details'>
        <div className='details-row'>
          <div className='details-column'>
            <h2>{randomBeer.name}</h2>
            <p className='tagline-details'>{randomBeer.tagline}</p>
          </div>
          <div className='details-column'>
            <p className='attenuation-level'>{randomBeer.attenuation_level}</p>
            <p className='first-brewed'>{randomBeer.first_brewed}</p>
          </div>
        </div>
        <div className='details-row'>
          <p className='description-details'>{randomBeer.description}</p>
        </div>
        <p className='contributed-by-details'>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeerPage;
