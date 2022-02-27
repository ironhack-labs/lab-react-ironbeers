import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function BeerDetails() {
  const [details, setDetails] = useState(undefined);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((result) => {
        setDetails(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  }, [beerId]);

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
