import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../components/Constants";
import axios from "axios";

function RandomBeersPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const [randomBeer, setRandomBeer] = useState();

  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRandomBeer() {
      try {
        const response = await axios.get(`${API_URL}/random`);
        setRandomBeer(response.data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that is not in the range of 2xx
          console.error(
            "Server responded with status code: ",
            error.response.status
          );
          console.error("Response data: ", error.response.data);
          // Here you can handle the error based on the status code
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received: ", error.request);
        } else {
          // Something else happened in setting up the request
          console.error("Error setting up the request: ", error.message);
        }
      }
    }
    fetchRandomBeer();
  }, []);

  // The logic and the structure for the page showing the random beer. You can leave this as it is.
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
