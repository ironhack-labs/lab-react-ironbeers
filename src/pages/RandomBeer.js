import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {randomBeer && (
        <div className="image-detailpage-card">
          <div className="image-beer-detail">
            <img src={randomBeer.image_url} alt="beer" />
          </div>
          <div>
            <h2>{randomBeer.name}</h2>
            <h2>{randomBeer.attenuation_level}</h2>
          </div>
          <div>
            <h2>{randomBeer.tagline}</h2>
            <h2>{randomBeer.first_brewed}</h2>
          </div>
          <div>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
