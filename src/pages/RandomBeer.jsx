import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null); // beer is an object

  const getRandomBeer = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(response.data);
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <div>
      {randomBeer && (
        <>
          <img src={randomBeer.image_url} alt="" />
          <h2>{randomBeer.name}</h2>
          <h3>{randomBeer.attenuation_level}</h3>
          <h4>{randomBeer.tagline}</h4>
          <h6>{randomBeer.first_brewed}</h6>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default RandomBeer;
