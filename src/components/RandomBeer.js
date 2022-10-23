import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log("error getting beer from the API", error);
      });
  }, []);

  return (
    <div>
      <header>
        <Link to="/">Home</Link>
      </header>
      <img src={beers.image_url} alt={beers.name} />
      <h3>{beers.name}</h3>
      <p>{beers.tagline}</p>
      <p>{beers.first_brewed}</p>
      <p>{beers.attenuation_level}</p>
      <p>{beers.description}</p>
      <p>{beers.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
