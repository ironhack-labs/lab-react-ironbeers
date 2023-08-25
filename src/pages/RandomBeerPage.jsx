import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {
  const [random, setRandom] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandom(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Random Beer</h2>
      <div>
        <img src={random.image_url} alt="" />
        <h2>{random.name}</h2>
        <h3>{random.tagline}</h3>
        <h3>{random.first_brewed}</h3>
        <h3>{random.attenuation_level}</h3>
        <h3>{random.description}</h3>
        <h4>Created by: {random.contributed_by}</h4>
      </div>
    </div>
  );
}

export default RandomBeersPage;
