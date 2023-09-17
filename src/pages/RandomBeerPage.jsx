import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [randombeerDetails, setRandomBeerDetails] = useState({});

  useEffect(() => {
    axios("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((respnse) => {
        console.log(respnse.data);
        setRandomBeerDetails(respnse.data);
      })
      .catch((e) => {
        console.log("error in random beer", e);
      });
  }, []);
  return (
    <div>
      <img src={randombeerDetails.image_url} alt="" />
      <h1>{randombeerDetails.attenuation_level}</h1>
      <h2>{randombeerDetails.name}</h2>
      <p>{randombeerDetails.tagline}</p>
      <p>{randombeerDetails.first_brewed}</p>
      <p>{randombeerDetails.attenuation_level}</p>
      <p>{randombeerDetails.description}</p>
      <p>{randombeerDetails.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;
