import React, { useEffect, useState } from "react";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/random");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBeer(data);
      } catch (error) {
        console.error("Error fetching random beer:", error);
      }
    };

    fetchRandomBeer();
  }, []);

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

export default RandomBeerPage;