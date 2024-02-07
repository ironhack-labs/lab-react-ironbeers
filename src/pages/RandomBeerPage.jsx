import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeerPage() {
  const [random, setRandom] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((random) => {
        setRandom(random.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <img src={random.image_url}></img>
      <h2>{random.name}</h2>
      <h3>{random.attenuation_level}</h3>
      <h4>{random.tagline}</h4>
      <p>{random.first_brewed}</p>
      <p>{random.description}</p>
      <p>{random.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
