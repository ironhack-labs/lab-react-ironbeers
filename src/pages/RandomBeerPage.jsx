
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [fetching, setfetching] = useState(true);

  useEffect(() => {
    console.log("useEffect BeerDetailsPage- Initial render (Mounting)");
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers/random")    
    .then((response) => {
      setRandomBeer(response.data);
      setfetching(false);
    })
    .catch((error) => {
        console.log(" There was an error", error);
        setfetching(false);
    });
  }, []);
  console.log("foundbeer", randomBeer);

  return (
    <div>
      {fetching ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={randomBeer.image_url} alt={randomBeer.name}></img>
          <div className="beerdetailspage-inline-info">
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.attenuation_level}</p>
          </div>
          <div className="beerdetailspage-inline-info">
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
          </div>

          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeersPage;
