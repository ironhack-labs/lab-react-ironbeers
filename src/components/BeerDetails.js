import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetails({ props }) {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <div>
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>
          <strong>First brewed:</strong> {beer.first_brewed}
        </p>
        <p>
          <strong>Attenuation level:</strong> {beer.attenuation_level}
        </p>
        <p>{beer.description}</p>
        <p>
          <strong>Contributed by:</strong> {beer.contributed_by}
        </p>
      </div>
    </div>
  );
}

export default BeerDetails;
