import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  // Initial state to store the beer info retrieved from the Beers API.
  const [beer, setBeer] = useState(null);

  // React Router hook for navigation. We use it for the back button.
  const navigate = useNavigate();
  
  // Get the beer ID from the URL using the useParams hook.
  const { beerId } = useParams();

  // Set up an effect hook to make a request for the beer info from the Beers API.
  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        setBeer(response.data); // Update state with API response data
      })
      .catch(error => {
        console.error("Error fetching the beer details: ", error);
      });
  }, [beerId]); // Dependency array with beerId to re-fetch if beerId changes

  // Structure and the content of the page showing the beer details.
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
