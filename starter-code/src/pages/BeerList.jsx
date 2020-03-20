import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BeerListItem from "../components/BeerListItem";
import { getBeers } from "../api/beer.api";
import Section from "../layouts/Section";

const BeerList = () => {
  const [beers, setBeers] = useState(false);
  useEffect(() => {
    getBeers("/beers").then(data => setBeers(data));
  }, []);

  return (
    <Section url={"/"}>
      {beers &&
        beers.map(beer => (
          <Link to={`/beers/${beer._id}`}>
            <BeerListItem key={beer._id} {...beer} onClick={e => getBeers(`/beers/${beer._id}`)} />
          </Link>
        ))}
    </Section>
  );
};

export default BeerList;
