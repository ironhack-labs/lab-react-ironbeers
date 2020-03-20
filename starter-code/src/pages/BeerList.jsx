import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BeerListItem from "../components/BeerListItem";
import { BeerContext } from "../api/beer.api";

const BeerList = () => {
  const { getBeers } = useContext(BeerContext);
  const [beers, setBeers] = useState(false);
  useEffect(() => {
    getBeers("/beers").then(data => setBeers(data));
  }, []);
  console.log("BEERS", beers);

  return (
    <div>
      {beers &&
        beers.map(beer => (
          <Link to={`/beers/card`}>
            <BeerListItem key={beer._id} {...beer} onClick={e => getBeers(`/beers/${beer._id}`)} />
          </Link>
        ))}
    </div>
  );
};

export default BeerList;
