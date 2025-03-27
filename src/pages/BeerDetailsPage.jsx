import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => setBeer(response.data))
      .catch(error => console.error("Error fetching beer details:", error));
  }, [beerId]);

  if (!beer) return <p>Loading...</p>;

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} style={{ height: "200px" }} />
      <h1>{beer.name}</h1>
      <p>{beer.description}</p>
      <p>First Brewed: {beer.first_brewed}</p>
    </div>
  );
}

export default BeerDetailsPage;
