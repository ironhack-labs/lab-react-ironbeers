import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
    .get(`${API_URL}/${beerId}`)
    .then((response) => {
        console.log(response.data);
        setBeer(response.data);
      })
    .catch((error) => console.log(error));
  }, [beerId]);

  if (!beer) return <p>Loading...</p>;

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} style={{ height: '200px' }} />
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;