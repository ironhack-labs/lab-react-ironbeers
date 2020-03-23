import React, { useEffect, useState } from "react";
import { beerDetail } from "../api/BeersApi";
import BeerCard from "./BeerCard";
import Navbar from "./Navbar";

const SingleBeer = props => {
  const id = props.match.params.id;
  const [beer, setBeer] = useState({});

  useEffect(() => {
    beerDetail(id).then(beer => setBeer(beer));
  }, [id]);

  if (!beer) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <BeerCard beer={beer}></BeerCard>
    </div>
  );
};

export default SingleBeer;
