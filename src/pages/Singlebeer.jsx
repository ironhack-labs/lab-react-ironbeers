import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

/* implementar o useParams(); */

function BeersDetails() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>All Beers</h1>

      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url} className="img" alt="beer" />
          <h3>{beer.name}</h3>
          <h3>{beer.tagline}</h3>
          <h3>{beer.first_brewed}</h3>
          <h3>{beer.attenuation_level}</h3>
          <h3>{beer.description}</h3>
          <h3>{beer.contributd_by}</h3>
        </div>
      ))}
    </div>
  );
}

export default BeersDetails;
