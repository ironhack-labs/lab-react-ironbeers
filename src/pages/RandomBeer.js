import { React, useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/Header';

function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then((response) => {
      console.log("response.data", response.data);
      setBeer(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="card">
        <img src={beer.image_url} alt="beer" width="100" />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Attenuation level: {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeer;
