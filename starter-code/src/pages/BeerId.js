import React, { useEffect, useState } from "react";
import { beerDetail } from "../../lib/BeersApi";
import { Header } from "../components/Header";
import { SingleBeer } from "../components/SingleBeer";

export const BeerId = props => {
  const id = props.match.params.id;
  const [beer, setBeer] = useState({});

  useEffect(() => {
    beerDetail(id).then(beer => setBeer(beer));
  }, [id]);

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
