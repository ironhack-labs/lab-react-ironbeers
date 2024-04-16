import { useEffect, useState } from "react";
import axios from "axios";
import BeerCardDetail from "../components/BeerCardDetail";

function RandomBeersPage() {

  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((beer) => {
      setRandomBeer(beer.data);
    })
    .catch((error) => console.error("There was an error", error))
  }, [])

  return (
    <>
      <BeerCardDetail {...randomBeer}/>
    </>
  );
}

export default RandomBeersPage;
