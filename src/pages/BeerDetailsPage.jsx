import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams(); // Get beerId from the URL
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response.data); // Debugging: Check data structure
        setBeer(response.data);
      })
      .catch((error) => console.error("Error fetching beer details:", error));
  }, [beerId]);

  if (!beer) {
    return <p>Loading beer details...</p>; // Handle loading state
  }

  return (
    <div className="beer-details">
      <img src={beer.image_url} alt={beer.name} className="beer-image" />
      <h1>{beer.name}</h1>
      <p className="tagline">{beer.tagline}</p>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p className="description">{beer.description}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
