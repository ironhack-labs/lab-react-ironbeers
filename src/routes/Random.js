import { useState, useEffect } from "react";
import Header from "../Header";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      {beer ? (
        <div>
          <img src={beer.image_url} alt={beer.name} />
          <h1>{beer.name}</h1>
          <h2>{beer.tagline}</h2>
          <p>
            <strong>First brewed:</strong> {beer.first_brewed}
          </p>
          <p>
            <strong>Attenuation level:</strong> {beer.attenuation_level}
          </p>
          <p>{beer.description}</p>
          <p>
            <strong>Contributed by:</strong> {beer.contributed_by}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default RandomBeer;
