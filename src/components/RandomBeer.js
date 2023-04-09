import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState(null);
  const URL = "https://ih-beers-api2.herokuapp.com";

  useEffect(() => {
    axios
      .get(URL + `/beers/random`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Random Beer</h1>
      {beer ? (
        <div>
          <img src={beer.image_url} alt="beer-img" />
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>
        </div>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}

export default RandomBeer;
