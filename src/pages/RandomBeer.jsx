import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { SiHomebrew } from "react-icons/si";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    const getRandomBeer = async () => {
      const { data } = await axios(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setRandomBeer(data);
    };
    getRandomBeer();
  }, []);

  return (
    <div>
      <header>
        <Link to={"/"}>
          <SiHomebrew className="home-icon" />
        </Link>{" "}
      </header>

      <h1>Random Beer</h1>
      <div className="random-beer-container">
        <div className="beer-card">
          <img src={randomBeer.image_url} alt="beer" className="random-beer" />
          <h1>{randomBeer.name}</h1>
          <h3> {randomBeer.tagline}</h3>
          <h4> Contributed By: {randomBeer.contributed_by}</h4>
          <h4> First Brewed: {randomBeer.first_brewed}</h4>
          <h4> Attenuation Level: {randomBeer.attenuation_level}</h4>
          <h4>Description: {randomBeer.description}</h4>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
