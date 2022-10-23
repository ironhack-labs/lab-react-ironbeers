import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerDetails() {
  const [beers, setBeers] = useState([]);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log("error getting beer from the API", error);
      });
  }, [beerId]);

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

export default BeerDetails;
