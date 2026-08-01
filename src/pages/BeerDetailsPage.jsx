import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();
  useEffect(() => {
    axios
      .get(`https://ironhack.com{beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the beer details:", error);
      });
  }, [beerId]); 
  if (!beer) {
    return <p>Loading beer details...</p>;
  }

  return (
    <div className="beer-details">
      <img src={beer.image_url} alt={beer.name} style={{ height: "200px" }} />
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
