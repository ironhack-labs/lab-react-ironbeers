import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerDetailsCard from "../components/BeerDetailsCard";

function RandomBeerPage() {
  const [beer, setBeer] = useState();

  const getRandomBeer = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((result) => {
        setBeer(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  if (!beer) return;

  return (
    <div>
      <BeerDetailsCard beer={beer} />
    </div>
  );
}

export default RandomBeerPage;
