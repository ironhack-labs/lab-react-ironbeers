import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
      <NavLink />
      {randomBeer && (
        <div>
          <div key={randomBeer._id}>
            <div>
              <img src={randomBeer.image_url}/>
            </div>
            <div>
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