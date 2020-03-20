import React, { useState, useEffect } from "react";
import { randomBeer } from "../../lib/ApiBeer";
import { Layout } from "../layouts/layout";

export const RandomBeer = () => {
  const [beer, setBeer] = useState({});
  useEffect(() => {
    randomBeer().then(beer => setBeer(beer));
  }, []);
  return (
    <>
      <Layout />
      <div>
        <img src={beer.image_url} />
        <h3>Name: {beer.name}</h3>
        <p>Attenuation: {beer.attenuation_level}</p>
        <p>Tagline: {beer.tagline}</p>
        <p>First Brewer: {beer.first_brewed}</p>
        <p>Description: {beer.description}</p>
        <p>Contributed: {beer.contributed_by}</p>
      </div>
    </>
  );
};
