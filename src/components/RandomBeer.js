import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RandomBeer = ({ devAPI, isLoading, setIsLoading }) => {
  const [aRandomBeer, setARandomBeer] = useState();

  useEffect(() => {
    getRandomBeer();
  }, []);

  const getRandomBeer = () => {
    axios
      .get(devAPI + "/beers/random")
      .then((aRandomBeer) => {
        //console.log(aRandomBeer.data);
        setARandomBeer(aRandomBeer.data); // I want to access and display the API's response
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (aRandomBeer === undefined) {
    return <div>waiting for the data to arrive</div>;
  }

  return (
    <div>
      <nav>
        <NavLink className="App-link" to="/">
          Home
        </NavLink>
      </nav>
      <img src={aRandomBeer.image_url} alt="a beer" />
      <h2>Title: {aRandomBeer.name}</h2>
      <p>Tagline: {aRandomBeer.tagline}</p>
      <p>Contributed by: {aRandomBeer.contributed_by}</p>
      <Link to="/">Back</Link>
    </div>
  );
};
export default RandomBeer;
