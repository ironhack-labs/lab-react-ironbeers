import React, { useState, useEffect } from "react";
import Section from "../layouts/Section";
import BeerCard from "../components/BeerCard";
import { getBeers } from "../api/beer.api";

const BeerDetail = props => {
  const url = props.match.params.id;

  const [beer, setBeer] = useState(false);
  useEffect(() => {
    getBeers(`/beers/${url}`).then(data => setBeer(data));
  }, []);

  return <Section url={url === "random" ? "/" : "/beers"}>{beer && <BeerCard {...{ ...beer }} />}</Section>;
};

export default BeerDetail;
