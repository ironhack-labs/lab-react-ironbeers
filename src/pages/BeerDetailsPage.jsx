import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../components/Constants";

function BeerDetailsPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const [beer, setBeer] = useState();

  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();
  const { beerId } = useParams();

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(`${API_URL}/${beerId}`);
        setBeer(response.data);
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

    fetchBeer();
  }, []);

  // Structure and the content of the page showing the beer details. You can leave this as it is:
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {beer && (
        <>
          <img
            src={beer.image_url}
            alt="Beer Image"
            height="300px"
            width="auto"
          />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>

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

export default BeerDetailsPage;
