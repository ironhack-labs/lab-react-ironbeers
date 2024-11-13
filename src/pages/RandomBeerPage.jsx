import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import beersJSON from "./../assets/beers.json";
import axios from "axios";

function RandomBeersPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const [randomBeer, setRandomBeer] = useState();

  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();

  function getARandomBeer() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((resp) => {
        setRandomBeer(resp.data);
      })
      .catch((error) => {
        console.log("there's been an error getting a random beer:", error);
      });
  }

  useEffect(() => {
    getARandomBeer();
  }, []);
  
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Random Beer</h2>

      {randomBeer && (
        <>
          <img
            src={randomBeer.image_url}
            alt="beer"
            height="300px"
            width="auto"
          />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Created by: {randomBeer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default RandomBeersPage;
