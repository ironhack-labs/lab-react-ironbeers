import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  console.log();

  useEffect(() => {
    axios
      .get(`${apiURL}/random`)
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!randomBeer) {
    return "loading...";
  }

  return (
    <div className="randomBeer-container">
      <div className="img-wrapper">
        <img src={randomBeer.image_url} alt={randomBeer.name} />
      </div>

      <div className="details-info">
        <h2>
          {randomBeer.name} <span>{randomBeer.attenuation_level}</span>
        </h2>
        <h3>
          {randomBeer.tagline} <span>{randomBeer.first_brewed}</span>
        </h3>
        <p className="description">{randomBeer.description}</p>
        <p className="creator">{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeersPage;
