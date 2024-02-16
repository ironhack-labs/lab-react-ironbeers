import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBeerDetail } from "../services/beerService";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    getBeerDetail(beerId)
      .then((beerApi) => {
        setBeer(beerApi);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={beer.image_url} />
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <p>{beer.first_brewed}</p>
      <h2>{beer.attenuation_level}</h2>
      <p>{beer.description}</p>
      <h3>{beer.contributed_by}</h3>
      <Link to="/beers">
        <h3>Back</h3>
      </Link>
    </div>
  );
}

export default BeerDetailsPage;
