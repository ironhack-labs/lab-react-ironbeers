import { useEffect, useState } from "react";
import { BASE_URL } from "../App";
import Header from "./Header";
import SingleBeerDisplay from "./SingleBeerDisplay";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});
  useEffect(() => {
    async function fetchRandomBeer() {
      const response = await fetch(BASE_URL + "beers/random");
      const data = await response.json();
      console.log("RANDOM", data);
      setRandomBeer(data);
    }
    fetchRandomBeer();
  }, []);

  return (
    <div>
      <Header />
      <SingleBeerDisplay singleBeer={randomBeer} />
    </div>
  );
}

export default RandomBeer;
