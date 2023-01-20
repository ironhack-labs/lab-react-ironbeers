import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RandomBeer = (devAPI) => {
  const [randomBeer, setRandomBeer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomBeer();
  }, []);

  const getRandomBeer = () => {
    axios
      .get(devAPI + "/beers/random")
      .then((aRandomBeer) => {
        console.log(aRandomBeer);

        setRandomBeer(aRandomBeer); // I want to access and display the API's response
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <div>
      <nav>
        <NavLink className="App-link" to="/">
          Home
        </NavLink>
      </nav>
      <h2>Title: {randomBeer.name}</h2>
      <p>Tagline: {randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
};
export default RandomBeer;
