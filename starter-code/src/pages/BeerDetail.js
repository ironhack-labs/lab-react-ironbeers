import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../components/Header";

export const BeerDetail = props => {
  const { id } = props.match.params;
  const [beer, setBeer] = useState([]);

  const listAllBeers = async () => {
    const res = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );
    return res.data;
  };

  useEffect(() => {
    listAllBeers().then(beer => setBeer(beer));
  }, []);

  return (
    <div>
      <Header></Header>
      <div>
        <p>{beer.name}</p>
        <img src={beer.image_url} alt={beer.name}></img>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
};
