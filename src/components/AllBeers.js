import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function AllBeers({ beers }) {
  return (
    <div>
      <Header />
      {beers.map((beer) => {
        return (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h5>{beer.name}</h5>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link to={`/beer-details/${beer._id}`}>More info</Link>
          </li>
        );
      })}
    </div>
  );
}

export default AllBeers;
