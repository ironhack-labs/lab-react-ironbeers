import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BeerDetailsPage() {
  const [beerInfo, setBeerInfo] = useState(null);
  const [fetching, setFetching] = useState(true);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeerInfo(response.data);
        setFetching(false);
      });
  }, [beerId]);

  return (
    <div>
      <h2>Beer Details</h2>
      {!beerInfo && <h3>Beer not found!</h3>}
      {beerInfo && (
        <div>
          <img src={beerInfo.image_url}></img>
          <h3>{beerInfo.name}</h3>
          <p>{beerInfo.tagline}</p>
          <p>{beerInfo.first_brewed}</p>
          <p>{beerInfo.attenuation_level}</p>
          <p>{beerInfo.description}</p>
          <p>Created by: {beerInfo.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
