import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function RandomBeer() {
  const [details, setDetails] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((result) => {
        setDetails(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {details && (
        <div>
          <img src={details.image_url} alt={details.name} />
          <h2>{details.name}</h2>
          <p>{details.tagline}</p>
          <p>{details.first_brewed}</p>
          <p>{details.attenuation_level}</p>
          <p>{details.description}</p>
          <p>{details.contributed_by}</p>
        </div>
      )}
    </div>
  );
}
