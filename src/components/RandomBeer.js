import Header from "./Header";
import "./RandomBeer.css";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
  const baseURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(baseURL + "/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((e) => console.log(e, "error getting a random beer from the Db "));
  }, []);

  return (
    <div>
      <Header />
      <h1>Name: {randomBeer.name}</h1>
      <img src={randomBeer.image_url} alt="" />
      <h3>Tagline:{randomBeer.tagline}</h3>
      <h4>Contributed By: {randomBeer.contributed_by}</h4>
      <h4>First Brewed: {randomBeer.first_brewed}</h4>
      <h4>Attenuation Level:{randomBeer.attenuation_level}</h4>
      <h4>Decription: {randomBeer.description}</h4>

    </div>
  );
}

export default RandomBeer;
