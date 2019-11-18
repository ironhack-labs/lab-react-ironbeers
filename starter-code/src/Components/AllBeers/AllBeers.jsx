import React from "react";
import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";

import "./AllBeers.css";

export default function AllBeers(props) {
  let listBeers = () => {
    let beers = Object.values(props.allBeers);

    return beers.map((eachBeer, i) => {
      return (
        <div className="container">
          <img
            className="list-image"
            src={eachBeer.image_url}
            alt={eachBeer.name}
          />
          <Link to={`beers/${eachBeer._id}`}>
            <h2>{eachBeer.name}</h2>
          </Link>
          <quote>{eachBeer.tagline}</quote>
          <p>{eachBeer.contributed_by}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <Nav />
      <h1>Here are all of the beers</h1>
      <p>{listBeers()}</p>
    </div>
  );
}
