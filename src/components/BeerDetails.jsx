import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

//use params
//axios get api
// renderizar tudo outra vez

function BeerDetails() {
  const [oneBeer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        setBeer(res.data);
      })
      .catch((err) => console.log(err));
  }, [beerId]);

  return (
    <div>
      <Header />
      <br />
      <div className="cList">
        {oneBeer && (
          <div className="myCard">
            <img
              className="beerImage"
              src={oneBeer.image_url}
              alt={oneBeer.name}
            />
            <h1>{oneBeer.name}</h1>
            <h4>{oneBeer.tagline}</h4>
            <h4>Created : {oneBeer.first_brewed}</h4>
            <h4> Alcohol: {oneBeer.abv} %</h4>
            <h4>Attenuation Level: {oneBeer.attenuation_level}</h4>
            <h4>Description: {oneBeer.description}</h4>
            <h6>Created by: {oneBeer.contributed_by}</h6>
          </div>
        )}
      </div>
    </div>
  );
}

export default BeerDetails;
