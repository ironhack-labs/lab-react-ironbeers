import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        console.log(response.data); // Para ayudarte a visualizar la estructura de los datos
        setBeer(response.data);
      })
      .catch(error => {
        console.error("Error fetching the beer details: ", error);
      });
  }, [beerId]);

  if (!beer) return <div>Loading...</div>;

  return (
    <div>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} style={{ width: "100px" }} />
      <p><strong>Tagline:</strong> {beer.tagline}</p>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;