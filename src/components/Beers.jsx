import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

function Beers({ beers }) {
  return (
    <div>
      <Header />
      <div>
        {beers.map((beer) => {
          return (
            <NavLink
              to={`/beers/${beer._id}`}
              className="eachBeers"
              key={beer._id}
            >
              <div>
                <img
                  src={beer.image_url}
                  alt={beer.name}
                  className="beerImage"
                />
              </div>
              <div>
                <div>{beer.name}</div>
                <div>{beer.tagline}</div>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Beers;
