import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CompleteBeer = props => {
  const [beer, updateBeer] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      "https://ih-beers-api2.herokuapp.com/beers/" +
        (props.random ? "random" : id)
    )
      .then(res => res.json())
      .then(json => updateBeer(json));
  }, []);

  return (
    <div>
      <img src={beer.image_url} />
      <h3>{beer.name}</h3>
      <p>{beer.attenuation_level}</p>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default CompleteBeer;
