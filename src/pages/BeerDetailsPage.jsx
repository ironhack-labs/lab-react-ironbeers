import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";  // Make sure to import axios

function BeerDetailsPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const [beer, setBeer] = useState(null);  // Start with null because we don't have the data yet

  // React Router hook for navigation. We use it for the back button.
  const navigate = useNavigate();

  // Use useParams to access the beerId from the URL
  const { beerId } = useParams();

  // Fetch beer details when the component mounts or when beerId changes
  useEffect(() => {
    // Make the API request using axios
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);  // Update the state with the beer details
      })
      .catch((err) => {
        console.error("Error fetching beer details:", err);  // Handle errors
      });
  }, [beerId]); // Re-run the effect when beerId changes

  // Return early if the beer data is not available yet
  if (!beer) {
    return <div>Loading...</div>;
  }

  // Structure and the content of the page showing the beer details
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
              navigate(-1); // Go back to the previous page
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
