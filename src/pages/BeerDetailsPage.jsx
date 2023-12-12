import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [beerId]);

  if (!beer) {
    return <p className='loading'>Loading...</p>;
  }

  return (
    <div className='beer-details-container'>
      <img src={`${beer.image_url}`} alt={`photo of ${beer.name}`} />
      <div className='beer-details'>

        <div className='details-row'>
          <div className='details-column'>
            <h2>{beer.name}</h2>
            <p className='tagline-details'>{beer.tagline}</p>
          </div>
          <div className='details-column'>
            <p className='attenuation-level'>{beer.attenuation_level}</p>
            <p className='first-brewed'>{beer.first_brewed}</p>
          </div>
        </div>

        <div className='details-row'>
          <p className='description-details'>{beer.description}</p>
        </div>

        <p className='contributed-by-details'>{beer.contributed_by}</p>
        
      </div>
    </div>
  );
}

export default BeerDetailsPage;

