// src/pages/BeerDetailsPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    // Make a GET request to fetch the details of the selected beer
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => response.json())
      .then((data) => setBeer(data));
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
