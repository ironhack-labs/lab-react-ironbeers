import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listBeer } from "../../lib/ApiBeer";
import { Layout } from "../layouts/layout";

export const AllBeers = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    listBeer().then(beers => setList(beers));
  }, []);

  return (
    <>
      <Layout />
      <ul>
        {list.map(beer => (
          <li key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} />
              <h3>{beer.name}</h3>
              <p>
                <b>{beer.tagline}</b>
              </p>
              <p>{beer.contributed_by}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
