import React from "react";

import Beer from "../components/Beer";

function Beers({ beers }) {
  return (
    <div className="beer-collection">
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Beer beer={beer} />
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
