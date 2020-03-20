import React, { useState, useEffect } from "react";
import Section from "../layouts/Section";
import BeerCard from "../components/BeerCard";
import { getBeers } from "../api/beer.api";

const BeerDetail = props => {
  const url = props.match.params.id;
  console.log("url", url, "PROPS", props);
  const [beer, setBeer] = useState(false);
  useEffect(() => {
    getBeers(`/beers/${url}`).then(data => setBeer(data));
  }, []);

  console.log("url", url);
  return <Section url={url === "random" ? "/" : "/beers"}>{beer && <BeerCard {...{ ...beer }} />}</Section>;
};

export default BeerDetail;
