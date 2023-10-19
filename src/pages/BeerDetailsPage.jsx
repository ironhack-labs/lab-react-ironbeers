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
    <div className="container my-4">
      <h2 className="text-center">Beer Details</h2>
      <div className="mt-4">
        {!beerInfo && <h3>Beer not found!</h3>}
        {beerInfo && (
          <div className="d-flex gap-5">
            <img className="beer-image" src={beerInfo.image_url}></img>
            <div className="border rounded bg-light p-4">
              <h3>{beerInfo.name}</h3>
              <br />
              <p>{beerInfo.tagline}</p>
              <p>First Brewed: {beerInfo.first_brewed}</p>
              <p>Attenuation Level: {beerInfo.attenuation_level}</p>
              <p>{beerInfo.description}</p>
              <p>Created by: {beerInfo.contributed_by}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BeerDetailsPage;
