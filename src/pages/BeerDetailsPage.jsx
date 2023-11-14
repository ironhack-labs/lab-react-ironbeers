import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();



  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId.beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching beer details:', error);
      });
  }, [beerId]);

 
  return (
    <div>
      {beer === null ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt={beer.name} />
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
