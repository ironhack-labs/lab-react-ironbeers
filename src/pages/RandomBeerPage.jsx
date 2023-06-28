import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!beer) return "Loading...";

  return (
    <div className="beer-detail">
      <img className="beer-image" src={beer.image_url} alt={beer.name} />
      <div className="beer-header">
        <div className="beer-name-level">
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
        </div>
        <div className="beer-tag-brewed">
          <p className="beer-attenuation">{beer.attenuation_level}</p>
          <p>
            <strong>{beer.first_brewed}</strong>
          </p>
        </div>
      </div>

      <p className="beer-description">{beer.description}</p>
      <p className="beer-contributed">
        Created by:
        {beer.contributed_by}
      </p>
    </div>
  );
}

export default RandomBeerPage;
