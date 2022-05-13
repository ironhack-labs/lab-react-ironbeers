import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => error);
  }, []);

  return (
    <div className="BeerDetails">
      <Header />
      <h1>Random Beer</h1>

      {!randomBeer && <h3>Beer not found!</h3>}
      {randomBeer && (
        <>
          <div>
            <img
              src={randomBeer.image_url}
              alt={randomBeer.name}
              style={{ height: "300px" }}
            />
          </div>
          <div>
            <h2>{randomBeer.name}</h2>
            <h4>Tagline : {randomBeer.tagline}</h4>
            <h4>Attenuation level : {randomBeer.attenuation_level}</h4>
            <h4>First brewed : {randomBeer.first_brewed}</h4>
            <h4>Description : {randomBeer.description}</h4>
            <h4>Contributed by : {randomBeer.contributed_by}</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default RandomBeer;
