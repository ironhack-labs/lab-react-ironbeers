// src/pages/BeerDetailsPage.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  // State to store the beer data and error message
  const [beer, setBeer] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Get the beerId from the URL parameters
  const { beerId } = useParams();

  // Fetch the beer details when the component mounts or the beerId changes
  useEffect(() => {
    // Fetch beer details using the beerId
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data); // Store the beer data in the state
      })
      .catch((error) => {
        setError("Error fetching beer details. Please try again later.");
        console.error("Error fetching beer details:", error);
      });
  }, [beerId]); // The effect will run again if the beerId changes

  // Display error if fetching failed
  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  // Show loading message if beer data is not loaded yet
  if (!beer) {
    return <div>Loading beer details...</div>;
  }

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

