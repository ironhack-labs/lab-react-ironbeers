import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((beerRandom) => {
        console.log(beerRandom.data);
        setRandomBeer(beerRandom.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="random-beer">
      <Header />
      {randomBeer && (
        <div className="card">
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <div className="card-body">
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>First brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation level: {randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>Contributed by: {randomBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
