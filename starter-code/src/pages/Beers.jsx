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
<<<<<<< HEAD:starter-code/src/pages/Beers.jsx
            <BeerListItem {...beer} />
=======
            <BeerListItem {...beer} onClick={e => getBeers(`/beers/${beer._id}`)} />
>>>>>>> b7fb0734861e05a0c44a7bfed304694f48628b2b:starter-code/src/pages/BeerList.jsx
          </Link>
        ))}
    </Section>
  );
};

export default Beers;
