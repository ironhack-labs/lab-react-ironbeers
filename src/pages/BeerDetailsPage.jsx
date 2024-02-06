import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  // Initialize state for beer details
  const [beer, setBeer] = useState(null);
  // React Router hook for navigation
  const navigate = useNavigate();
  // Get the beer ID from the URL
  const { beerId } = useParams();

  // Log the id to ensure it's correctly received
  console.log("Beer ID:", beerId);

  // Effect hook to fetch beer details from the API
  useEffect(() => {
    // Function to fetch beer details
    const fetchBeerDetails = async () => {
      try {
        // Make HTTP request using Axios
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        // Update state with response data
        setBeer(response.data);
      } catch (error) {
        console.error("Error fetching beer details:", error);
      }
    };

    // Call the fetchBeerDetails function
    fetchBeerDetails();
  }, [beerId]); // Dependency on id ensures this effect runs when id changes

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
