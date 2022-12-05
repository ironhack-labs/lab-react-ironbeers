import axios from "axios";
import { useState, useEffect } from "react";

const RandomBeerPage = () => {

  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data)
      })
  }, []);

  return (
    <>
  
    
        <img src={randomBeer.image_url} alt="beer" height="300" width="150" />
        
          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.tagline}</p>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>Contributed By: {randomBeer.contributed_by}</p>
      
    </>
  )
}

export default RandomBeerPage;