import axios from "axios";
import React from "react";

function Beers({beers}) {

  return (
    <div className="beer-collection">
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img
              src={beer.image_url}
              alt={beer.name}
            ></img>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
