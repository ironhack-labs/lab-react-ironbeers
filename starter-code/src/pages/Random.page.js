import React, { useEffect, useState } from "react";
import { flechRandomBeer } from "../../lib/beers.api";
import { Item } from "../components/Item";

export const RamdomPage = props => {
  const id = props.match.params.id;
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    flechRandomBeer().then(beer => setBeer(beer));
  }, []);
  if (beer.length == 0) return <div>Loading...</div>;
  return (
    <>
      <Item
        src={beer.image_url}
        name={beer.name}
        tag={beer.tagline}
        level={beer.attenuation_level}
        date={beer.first_brewed}
        description={beer.description}
        author={beer.contributed_by}
      />
    </>
  );
};
