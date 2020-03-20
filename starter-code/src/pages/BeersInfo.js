import React, { useEffect, useState } from "react";
import { beerDetails } from "../lib/beers.api";
import { Beerdet } from "../components/BeerDet";

export const BeerId = props => {
  const id = props.match.params.id;
  const [beer, setBeer] = useState({});

  useEffect(() => {
    beerDetails(id).then(beer => setBeer(beer));
  }, [id]);

  return <Beerdet beer={beer} />;
};
