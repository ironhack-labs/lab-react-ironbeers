import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
  const [beerInfo, setBeerInfo] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => setBeerInfo(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />

      {!beerInfo && <h1> loading... </h1>}
      {beerInfo && (
        <div className="oneBeerDetails">
          <h1> {beerInfo.name}</h1>
          <h2>{beerInfo.tagline}</h2>
          <p>{beerInfo.first_brewed}</p>
          <p>Attenuation level: {beerInfo.attenuation_level}</p>
          <p>{beerInfo.description}</p>
          <p>Contributed By: {beerInfo.contributed_by}</p>
        </div>
      )}
    </div>
  );
}
export default RandomBeer;
