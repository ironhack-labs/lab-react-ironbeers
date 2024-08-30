import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the random beer!", error);
      });
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} style={{ width: "100px" }} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>
        <strong>First Brewed:</strong> {beer.first_brewed}
      </p>
      <p>
        <strong>Attenuation Level:</strong> {beer.attenuation_level}
      </p>
      <p>{beer.description}</p>
      <p>
        <strong>Contributed By:</strong> {beer.contributed_by}
      </p>
    </div>
  );
}

export default RandomBeerPage;
