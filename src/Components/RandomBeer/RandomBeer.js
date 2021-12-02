import React, { useEffect, useState } from 'react';
import BeersApi from '../../services/beers.service';

export default function RandomBeer() {
  let [beer, setBeer] = useState();

  let service = new BeersApi();
  useEffect(() => {
    loadBeers();
  }, []);

  let loadBeers = () => {
    service.getRandomBeer().then((result) => {
      setBeer((beer = result));
    });
  };

  return (
    <div>
      <h1>Random Beer</h1>
      <img src={beer?.data.image_url} alt="" />
      <h3>{beer?.data.name}</h3>
      <h4>{beer?.data.tagline}</h4>
      <p>Created By: {beer?.data.contributed_by}</p>
    </div>
  );
}
