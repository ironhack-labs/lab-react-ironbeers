import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => setBeer(response.data))
      .catch(error => console.error("Error fetching random beer:", error));
  }, []);

  if (!beer) return <p>Loading...</p>;

  return (
    <div>
      <h1>Random Beer 🎲</h1>
      <img src={beer.image_url} alt={beer.name} style={{ height: "200px" }} />
      <h3>{beer.name}</h3>
      <p>{beer.description}</p>
    </div>
  );
}

export default RandomBeerPage;
