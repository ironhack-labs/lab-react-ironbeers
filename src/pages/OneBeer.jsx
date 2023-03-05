import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BeerCard from "../components/BeerCard";

const OneBeer = () => {
  const [beer, setBeer] = useState(null);
  const beerId = useParams();
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/" + beerId.id)
      .then((res) => res.json())
      .then((res) => setBeer(res))
      .catch((error) => console.log(error));
  }, [beerId]);
  console.log(beer);
  if (!beer) {
    return <div className="Loading">Loading!</div>;
  }
  return <BeerCard beer={beer} />;
};

export default OneBeer;
