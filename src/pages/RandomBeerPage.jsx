import axios from "axios";
import { useEffect, useState } from "react";
// import "./pages.css";

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
    <div className="container-random-beer">
      <img src={random.image_url}></img>
      <div className="container-random-beer-text">
        <div className="h2-container-home-page">
          <h2>{random.name}</h2>
          <h3>{random.attenuation_level}</h3>
        </div>
        <div className="h4-container-home-page">
          <h4>{random.tagline}</h4>
          <p>{random.first_brewed}</p>
        </div>
        <div className="p-container-home-page">
          <p>{random.description}</p>
          <p>{random.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeerPage;
