import React, { useEffect } from "react";
import "./RandomBeer.css";
import axios from "axios";

export default function RandomBeers() {

    const [beer, setBeer] = React.useState([]);
    console.log(beer);

    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((res) => {
          setBeer(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return (
      <div className="beer-detail">
        <div className="beer-card">
          <img src={beer.image_url} alt={beer.name} />
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    );
}