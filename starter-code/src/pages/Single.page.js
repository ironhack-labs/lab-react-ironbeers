import React, { useEffect, useState } from "react";
import { flechSingleBeer } from "../../lib/beers.api";

export const SinglePage = props => {
  const id = props.match.params.id;
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    flechSingleBeer(id).then(beer => setBeer(beer));
  }, []);
  if (beer.length == 0) return <div>Loading...</div>;
  return (
    <>
      <h2>SINGLE BEER</h2>
      <p>{beer.name}</p>
    </>
  );
};
