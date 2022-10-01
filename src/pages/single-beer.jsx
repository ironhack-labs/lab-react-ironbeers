import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import BeerDetails from "../components/BeerDetails";

function SingleBeer() {
  const [beer, setBeer] = useState({});
  const beerId = useParams().beerId;

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((result) => {
        setBeer(result.data);
      })
      .catch((err) => console.log("Error: ", err));
  }, [beerId]);

  return (
    <div>
      <Navigation />
      <BeerDetails beerInfo={beer} />
    </div>
  );
}

export default SingleBeer;
