import React from "react";

import { Link } from "react-router-dom";
import { Section } from "../components/Section";

import beerImage from "../../public/img/beers.png";
import newBeerImage from "../../public/img/new-beer.png";
import randomImage from "../../public/img/random-beer.png";

export const HomePage = () => {
  return (
    <div className="list-group">
      <Link to={"/list"} className="list-group-item list-group-item-action">
        <Section image={beerImage} title="All Beers" />
      </Link>
      <Link
        to={"/detail/:id"}
        className="list-group-item list-group-item-action"
      >
        <Section image={newBeerImage} title="Random Beer" />
      </Link>
      <Link to={"/create"} className="list-group-item list-group-item-action">
        <Section image={randomImage} title="New Beer" />
      </Link>
    </div>
  );
};
