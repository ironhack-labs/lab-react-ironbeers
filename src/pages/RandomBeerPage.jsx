import axios from "axios";
import { useEffect, useState } from "react";


function RandomBeerPage() {
  
  const [randomBeer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log(response);
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      }, []);

    return (
      <div>
        <h1>RANDOM BEER</h1>
        <h2>{randomBeer.name}</h2>
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <p>{randomBeer.tagline}</p>
        <p>first brewed: {randomBeer.first_brewed}</p>
        <p>attenuation level: {randomBeer.attenuation_level}</p>
        <p>description: {randomBeer.description}</p>
        <p>contribution: {randomBeer.contributed_by}</p>
      </div>
    );
  });
}
export default RandomBeerPage;
