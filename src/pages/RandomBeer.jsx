import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import BeerDetails from "../components/BeerDetails";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (randomBeer === null) {
    return (
      <>
        <Header />
        ...loading
      </>
    );
  }
  return (
    <div>
      <Header />
      <BeerDetails details={randomBeer} />
    </div>
  );
}

export default RandomBeer;
