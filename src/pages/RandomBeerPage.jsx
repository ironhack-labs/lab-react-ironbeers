import { useEffect, useState } from "react";
import { getRandomBeer } from "../services/beerService";
import { Link } from "react-router-dom";

function RandomBeersPage() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    getRandomBeer()
      .then((beersApi) => {
        setBeer(beersApi);
      })
      .catch((err) => console.error(err));
  }, []);

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
      <Link to="/">
        <h3>back</h3>
      </Link>
    </div>
  );
}

export default RandomBeersPage;
