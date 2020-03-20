import React, { useState, useEffect } from "react";
import Section from "../layouts/Section";
import BeerCard from "../components/BeerCard";
import { getBeers } from "../api/beer.api";

const BeerDetail = props => {
  const id = props.match.params.id;
  const [beer, setBeer] = useState(false);
  useEffect(() => {
    getBeers(`/beers/${id}`).then(data => setBeer(data));
  }, []);

  console.log("ID", id);
  return <Section url={"/beers"}>{beer && <BeerCard {...{ ...beer }} />}</Section>;
};

export default BeerDetail;
