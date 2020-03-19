import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";

/* --- UI Framework --- */
import styled from "styled-components";

/* --- Components --- */

import { Header } from "../layout/Header";

/* --- lib(api) --- */

import { listAllBeers } from "../lib/beers.api";

export const Beers = () => {
  const [beersList, setBeers] = useState([]);

  useEffect(() => {
    listAllBeers().then(beersList => setBeers(beersList));
  }, []);

  return (
    <>
      {beersList.map(beer => (
        <Link to={`/beers/${beer._id}`}>
          <img src={beer.image_url} alt={beer.name} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <small>{beer.contributed_by}</small>
        </Link>
      ))}
    </>
  );
};
