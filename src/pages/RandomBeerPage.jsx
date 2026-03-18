import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { _BASE_URL_ } from "../config/api";
import imageNotFound from "../assets/beer_transparent2.png"
import axios from "axios";


function RandomBeersPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.

  const [randomBeer, setRandomBeer] = useState(null);

  // React Router hook for navigation. We use it for the back button. You can leave this as it is.

  const navigate = useNavigate();

  // TASKS:
  // 1. Set up an effect hook to make a request for a random beer from the Beers API.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.

  useEffect(() => {
    axios
      .get(_BASE_URL_ + "beers/random")
      .then((response) => {
        setRandomBeer(response.data)
      })
      .catch((err) => {
        console.log(err);

      })
  }, [])

  if (randomBeer === null) {
    return <h1>LOADING ....</h1>
  }
  // The logic and the structure for the page showing the random beer. You can leave this as it is.
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Random Beer</h2>

      {randomBeer && (
        <>
          <img
            src={randomBeer.image_url || imageNotFound}
            alt="beer"
            height="300px"
            width="auto"
            onError={(e) => {
              e.target.src = imageNotFound
            }}
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
