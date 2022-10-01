import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerDetails from "../components/beer-details";

function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((result) => {
        setBeer(result.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Random Beer</h1>
      <BeerDetails {...beer} />
    </div>
  );
}

export default RandomBeer;
