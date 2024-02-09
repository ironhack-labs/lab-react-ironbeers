import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((result) => {
        console.log(result.data);
        setRandomBeer(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!randomBeer)
    return (
      <div>
        <Navbar></Navbar>
        <p className="loading">loading random..</p>
      </div>
    );
  if (randomBeer)
    return (
      <>
        <Navbar></Navbar>
        <div className="one-wrapper">
          <div className="one-img-wrapper">
            <img src={randomBeer.image_url} alt="" />
          </div>
          <div className="one-info-wrapper">
            <h1>{randomBeer.name}</h1>
            <h2>{randomBeer.tagline}</h2>
            <h2> {randomBeer.first_brewed} </h2>
            <h1>{randomBeer.attenuation_level}</h1>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
          </div>
        </div>
      </>
    );
}

export default RandomBeersPage;

// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by
