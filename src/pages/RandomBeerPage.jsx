import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeersPage() {
  const [randomBeerDetails, setRandomBeerDetails] = useState(null);

  useEffect(function () {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(function (response) {
        setRandomBeerDetails(response.data);
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  if (!randomBeerDetails) return "loading";

  return (
    <div key={randomBeerDetails._id}>
      <img src={randomBeerDetails.image_url}></img>
      <h3>{randomBeerDetails.name}</h3>
      <h4>{randomBeerDetails.tagline}</h4>
      <div>{randomBeerDetails.first_brewed}</div>
      <div>{randomBeerDetails.attenuation_level}</div>
      <p>{randomBeerDetails.description}</p>
      <i>{randomBeerDetails.contributed_by}</i>
    </div>
  );
}

export default RandomBeersPage;
