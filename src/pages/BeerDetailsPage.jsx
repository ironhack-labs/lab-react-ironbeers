import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams(); // 1️
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`) // 2️
      .then((response) => {
        setBeer(response.data); // 3️ 
      })
      .catch((error) => {
        console.error("Error fetching beer details:", error);
      });
  }, [beerId]);

  if (!beer) return <p>Loading beer details...</p>; // 4️ 

  return (
    <div className="container text-center mt-5">
      <img src={beer.image_url} alt={beer.name} style={{ height: "200px" }} />
      <h2>{beer.name}</h2>
      <h4 className="text-muted">{beer.tagline}</h4>
      <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
      <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
      <p><strong>Description:</strong> {beer.description}</p>
      <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
