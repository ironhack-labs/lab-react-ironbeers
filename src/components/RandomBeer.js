import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    async function retrieveBeer() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setBeer(response.data);
    }
    retrieveBeer();
  }, []);

  return (
    <div className="container" style={{ padding: "40px" }}>
      {beer && (
        <div className="row">
          <div className="col-md-4">
            <img
              src={beer.image_url}
              alt={beer.name}
              style={{ width: "80px" }}
            />
          </div>
          <div className="col-md-8">
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>
              <b>First brewed: </b>
              {beer.first_brewed}
            </p>
            <p>
              <b>Attenuation level: </b>
              {beer.attenuation_level}
            </p>
            <p style={{ maxWidth: "650px" }}>{beer.description}</p>
            <p>
              <b>Contributed by: </b>
              {beer.contributed_by}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;