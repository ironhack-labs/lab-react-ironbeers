import React, { useEffect, useState } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setBeer(response.data);
      });
  }, []);

  return (
    <div>
      {beer ? (
        <div>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt={beer.name} />
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RandomBeerPage;
