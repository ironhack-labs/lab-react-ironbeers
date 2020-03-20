import React, { useEffect, useState } from "react";
import { randomBeer } from "../../lib/BeersApi";
import { Header } from "../components/Header";
import { SingleBeer } from "../components/SingleBeer";

export const RandomBeers = () => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    randomBeer().then(beer => setBeer(beer));
  }, []);

  return (
    <>
      <Header />
      <SingleBeer
        img={beer.image_url}
        name={beer.name}
        attenuation={beer.attenuation_level}
        tag={beer.tagline}
        brewed={beer.first_brewed}
        description={beer.description}
        contributed={beer.contributed_by}
      />
    </>
  );
};
