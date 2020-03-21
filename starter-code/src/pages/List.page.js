import React, { useEffect, useState } from "react";
import { ItemCard } from "../components/Card";
import { flechAllBeers } from "../../lib/beers.api";

export const ListPage = props => {
  const [listOfBeers, setListOfBeers] = useState([]);
  useEffect(() => {
    flechAllBeers().then(beers => setListOfBeers(beers));
  }, []);
  if (listOfBeers.length == 0) return <div>Loading...</div>;

  return (
    <div>
      <h2>LIST OF BEERS</h2>
      <ul>
        {listOfBeers.map((beer, i) => (
          <li key={beer._id}>
            <ItemCard
              id={beer._id}
              imgSrc={beer.image_url}
              name={beer.name}
              tag={beer.tagline}
              author={beer.contributed_by}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
