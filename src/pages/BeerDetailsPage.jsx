import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the beer details!", error);
      });
  });

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

export default BeerDetailsPage;