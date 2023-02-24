import axios from "axios";
import React from "react";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function Beers() {
  const [beers, setBeers] = React.useState([]);

  React.useEffect(() => {
    axios.get(apiURL).then((response) => setBeers(response.data));
  }, []);

  return (
    <div className="beer-collection">
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
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
