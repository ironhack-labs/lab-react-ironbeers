import React from "react";
import './SingleBeer.css'
import { useParams } from "react-router-dom";

export default function SingleBeer(props) {
  props.displayHeader(true);
  const { id } = useParams();

  const beerResult = props.beers.find((beer) => {
    return id === beer._id;
  });
  console.log(beerResult);

  return (
    <div className="detailsContainer">
      <img src={beerResult.image_url} alt={beerResult.name} />
      <div className="detailsText">
        <h2>{beerResult.name}</h2>
        <p>{beerResult.tagline}</p>
        <p>{beerResult.first_brewed}</p>
        <p>{beerResult.attenuation_level}</p>
        <p>{beerResult.description}</p>
        <p>{beerResult.contributed_by}</p>
      </div>
    </div>
  );
}
