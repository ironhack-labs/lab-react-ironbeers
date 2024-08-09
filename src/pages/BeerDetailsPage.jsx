import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response.data); 
        setBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching beer details:", error);
      });
  }, [beerId]); 

  if (!beer) {
    return <div>Loading beer details...</div>;
  }

  return (
    <div className="beer-details-container">
      <div className="beer-details-image">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="beer-details-header">
        <h1>{beer.name}</h1>
        <span>{beer.attenuation_level}</span>
      </div>
      <h3 className="beer-details-tagline">{beer.tagline}</h3>
      <p className="beer-details-first-brewed">{beer.first_brewed}</p>
      <p className="beer-details-description">{beer.description}</p>
      <p className="beer-details-contributor">
        {beer.contributed_by.split("<")[0]}
      </p>
    </div>
  );
}

export default BeerDetailsPage;
