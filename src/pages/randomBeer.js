import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  const getRamdomBeer = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRamdomBeer();
  }, []);

  return (
    <div class="card" style={{ width: "18rem" }}>
      {randomBeer && (
        <>
          <img src={randomBeer.image_url} alt="randomBeer" />
          <h5 class="card-title">{randomBeer.name}</h5>
          <h4 class="card-text">{randomBeer.tagline}</h4>
          <p class="card-text">First brewed: {randomBeer.first_brewed}</p>
          <p class="card-text">
            Attenuation level: {randomBeer.attenuation_level}
          </p>
          <p class="card-text">{randomBeer.description}</p>
          <p class="card-text">Contributed by: {randomBeer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default RandomBeerPage;
