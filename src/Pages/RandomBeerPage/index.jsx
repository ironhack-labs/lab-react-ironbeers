import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../Components/NavBar/index";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log("response.data", response.data);
        setRandomBeer(response.data);
      });
  }, []);
  return (
    <div>
      <Header />

      {randomBeer && (
        <div>
          <div key={randomBeer._id} className="random-beer-card">
            <div className="random-beer-img">
              <img src={randomBeer.image_url} alt="beer" />
            </div>
            <div className="random-beer-info">
              <div>
                <h3>{randomBeer.name}</h3>
                <h3>{randomBeer.attenuation_level}</h3>
              </div>
              <div>
                <h2>{randomBeer.tagline}</h2>
                <h2>{randomBeer.first_brewed}</h2>
              </div>
              <p>{randomBeer.description}</p>
              <p>{randomBeer.contributed_by}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;