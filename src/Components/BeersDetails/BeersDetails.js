import React, { useEffect, useState } from 'react';
import BeersApi from '../../services/beers.service';

export default function BeersDetails(props) {
  let [beer, setBeer] = useState();
  const { id } = props.match.params;

  let service = new BeersApi();
  useEffect(() => {
    loadBeers();
  }, []);

  let loadBeers = () => {
    service.getOneBeer(id).then((result) => {
      setBeer((beer = result));
    });
  };

  return (
    <div>
      <h1>Beer Details</h1>
      <img src={beer?.data.image_url} alt="" />
      <h3>{beer?.data.name}</h3>
      <h4>{beer?.data.tagline}</h4>
      <p>Created By: {beer?.data.contributed_by}</p>
    </div>
  );
}
