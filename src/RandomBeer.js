import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";

const RandomBeer = () => {

  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data)
      })
  }, []);

  return (
    <div className="RandomBeer">
      <Header />
      <div className="d-flex p-5 border-bottom my-3" >
        <img src={randomBeer.image_url} alt="beer" height="300" width="150" />
        <div className="p-5">
          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.tagline}</p>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>Contributed By: {randomBeer.contributed_by}</p>
        </div>
      </div>
    </div>
  )
}

export default RandomBeer;