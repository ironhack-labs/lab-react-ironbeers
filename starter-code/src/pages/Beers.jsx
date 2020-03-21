import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BeerListItem from "../components/BeerListItem";
import { getBeers } from "../api/beer.api";
import Section from "../layouts/Section";

const Beers = () => {
  const [beers, setBeers] = useState(false);

  useEffect(() => {
    getBeers("/beers").then(data => setBeers(data));
  }, []);

  return (
    <Section url={"/"}>
      {beers &&
        beers.map(beer => (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <BeerListItem {...beer} />
          </Link>
        ))}
    </Section>
  );
};

export default Beers;
