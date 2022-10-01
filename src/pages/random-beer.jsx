import React from "react";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import BeerDetails from "../components/BeerDetails";

function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((result) => {
        setBeer(result.data);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <div>
      <Navigation />
      <BeerDetails beerInfo={beer} />
    </div>
  );
}

export default RandomBeer;
