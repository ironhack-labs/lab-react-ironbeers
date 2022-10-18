import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleBeer = () => {
  const [randomBeer, setRandomBeer] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((result) => {
        setRandomBeer(result.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="single-beer-page">
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <div className="single-beer-tittle">
          <div className="left-col">
            <h2>{randomBeer.name}</h2>
            <h3>{randomBeer.tagline}</h3>
          </div>
          <div className="right-col">
            <span>{randomBeer.attenuation_level}</span>
            <span>{randomBeer.first_brewed}</span>
          </div>
        </div>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
  );
};

export default SingleBeer;