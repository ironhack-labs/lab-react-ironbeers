import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  // Initial state for the selected beer set to null
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Get the beer ID from the URL using useParams hook
  const { beerId } = useParams();

  // useEffect hook to fetch beer details when the component mounts
  useEffect(() => {
    // Construct the API URL using the beerId
    const apiUrl = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

    // Fetch the beer details
    axios.get(apiUrl)
      .then((response) => {
        setBeer(response.data); // Set the fetched beer details to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching beer details:', error);
        setError('Failed to fetch beer details');
        setLoading(false); // Set loading to false if there's an error
      });
  }, [beerId]); // Run effect when beerId changes

  // Render loading message if data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if an error occurred during the fetch
  if (error) {
    return <div>{error}</div>;
  }

  // Render the beer details once fetched
  return (
    <div className="d-flex flex-column align-items-center w-100 p-4">
      {beer && (
        <div className="card p-4" style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>
          <img
            src={beer.image_url}
            alt="Beer Image"
            height="300px"
            width="auto"
          />
          <h3 className="mt-4">{beer.name}</h3>
          <h5 className="text-muted">{beer.tagline}</h5>
          <p><strong>Attenuation level:</strong> {beer.attenuation_level}</p>
          <div className="beer-description mt-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
            <p><strong>Description:</strong> {beer.description}</p>
          </div>
          <p><strong>Created by:</strong> {beer.contributed_by}</p>

          <button
            className="btn btn-primary mt-4"
            style={{ padding: "5px 5px", fontSize: "0.8rem" }}  // Inline style to adjust padding and font size
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
