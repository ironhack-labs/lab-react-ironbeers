import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBeer(data);
      } catch (error) {
        console.error("Error fetching beer details:", error);
      }
    };

    fetchBeerDetails();
  }, [beerId]);

  if (!beer) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{beer.name}</h2>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.tagline}</p>
      <p>Primera elaboración: {beer.first_brewed}</p>
      <p>Nivel de atenuación: {beer.attenuation_level}</p>
      <p>Descripción: {beer.description}</p>
      <p>Contribuido por: {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;