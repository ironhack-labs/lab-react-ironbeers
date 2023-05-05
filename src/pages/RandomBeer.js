import { Link } from "react-router-dom";
import HeaderImage from "../assets/header.png";
import { useEffect, useState } from "react";
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
    <div>
      <header>
        <Link to="/">
          <img src={HeaderImage} alt="Header" />
        </Link>
      </header>
      {randomBeer && (
        <div>
          <h3>Random Beer</h3>
          <div key={randomBeer._id} className="card">
            <img src={randomBeer.image_url} alt="apartment" />
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>
              <b>Created by: </b>
              {randomBeer.contributed_by}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
