import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        console.error("Error fetching beer details:", error);
      });
  }, [beerId]);

  return (
    <div>
      <h2>Beer Details</h2>
      {beer ? (
        <div>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Description: {beer.description}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Contributed By: {beer.contributed_by}</p>
          <img src={beer.image_url} alt={beer.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BeerDetailsPage;
