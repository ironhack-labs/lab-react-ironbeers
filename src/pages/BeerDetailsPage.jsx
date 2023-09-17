import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((e) => {
        console.log("error getting beer details from API", e);
      });
  }, [beerId]);

  if (beer === null) {
    return <p>loading....</p>;
  }

  return (
    <section>
      <img src={beer.image_url} alt="image of beer" className="img-beer-details"/>
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <h2>{beer.attenuation_level}</h2>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </section>
  );
}

export default BeerDetailsPage;
