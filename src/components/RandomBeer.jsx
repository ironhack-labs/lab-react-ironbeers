import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((beerData) => {
        setRandomBeer(beerData.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="centered">
          <img className="smaller" src={randomBeer.image_url} />
          <div className="flexing">
            <h1>{randomBeer.name}</h1>
            <p className="big">{randomBeer.attenuation_level}</p>
          </div>
          <div className="flexing">
            <h2 className="tagline2">{randomBeer.tagline}</h2>
            <h3 className="small-font">{randomBeer.first_brewed}</h3>
          </div>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>
            {randomBeer.description}
          </p>
          <p style={{ textAlign: "left", fontStyle: "italic" }}>
            {randomBeer.contributed_by}
          </p>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
