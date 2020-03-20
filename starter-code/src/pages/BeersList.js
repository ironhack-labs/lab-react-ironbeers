import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { beersList } from "../../lib/BeersApi";
import { Header } from "../components/Header";

export const Beers = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    beersList().then(list => setList(list));
  }, []);

  return (
    <>
      <Header />
      <ul>
        {list.map(beer => (
          <li key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} />
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p>{beer.contributed_by}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
