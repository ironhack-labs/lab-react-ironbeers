import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div>
          <img src={beer.image_url} alt={beer.name} />
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      </>
    );
  }
}

export default BeerDetailsPage;
