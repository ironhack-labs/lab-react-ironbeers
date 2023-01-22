import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RandomBeer = ({ devAPI, isLoading, setIsLoading }) => {
  const [randomBeer, setRandomBeer] = useState();

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
      <h2>Title: {aRandomBeer.name}</h2>
      <p>Tagline: {aRandomBeer.tagline}</p>
      <p>First Brewed: {aRandomBeer.first_brewed}</p>
      <p>Attenuation Level: {aRandomBeer.attenuation_level}</p>
      <p>Description: {aRandomBeer.description}</p>
      <p>Contributed by: {aRandomBeer.contributed_by}</p>
      <Link to="/">Back</Link>
    </div>
  );
};
export default RandomBeer;
