import React from "react";
import { Link, NavLink } from "react-router-dom";

function BeersList(props) {
  const { beers } = props;
  return (
    <div>
      {beers.map((beer) => {
        return (
          <div>
            <Link to={`/${beer._id}`}>
              <p>{beer.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;
