import React, { useState, useEffect } from "react";
import { singleBeer } from "../../lib/ApiBeer";
import { Layout } from "../layouts/layout";

export const IdBeer = props => {
  const id = props.match.params.id;
  const [beer, setBeer] = useState({});

  useEffect(() => {
    singleBeer(id).then(beer => setBeer(beer));
  }, [id]);

  return (
    <>
      <Layout />
      <div>
        <img src={beer.img_url} />
        <h3>{beer.name}</h3>
        <p>{beer.attenuation_level}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </>
  );
};
