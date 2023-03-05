import React from "react";
import { Link } from "react-router-dom";
import homepage from "../assets/homepage.png";

function AllBeers({ beers }) {
  return (
    <div className="beerList">
      <Link to="/">
        <img src={homepage} alt="" />
      </Link>

      {beers.map((beer) => {
        return (
          <div>
            <img src={beer.image_url} alt="eachBeer" />
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Check details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
