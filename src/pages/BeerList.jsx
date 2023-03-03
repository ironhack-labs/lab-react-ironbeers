import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";

function BeerList(props) {
  const { beers } = props;

  console.log(beers);
  return (
    <div>
      <NavBar />
      {beers.map((beer) => {
        return (
          <div>
            <p>{beer.name}</p>
            <img src={beer.image_url} alt="" />
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
            <Link to={`/${beer._id}`}>See details</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default BeerList;
