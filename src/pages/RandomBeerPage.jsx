import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function RandomBeersPage() {
  // State to store the details of the random beer
  const [randomBeer, setRandomBeer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // React Router hook for navigation (back button)
  const navigate = useNavigate();

  // useEffect hook to fetch a random beer when the component mounts
  useEffect(() => {
    async function fetchRandomBeer() {
      try {
        const { data } = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setRandomBeer(data); // Set the state with the fetched beer data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching random beer:', error);
        setError('Failed to fetch random beer');
        setLoading(false); // Set loading to false if there's an error
      }
    }
    fetchRandomBeer();
  }, []); // Run the effect only once when the component mounts

  // Render loading message if data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if an error occurred during the fetch
  if (error) {
    return <div>{error}</div>;
  }

  // Render the random beer details
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
          <h3 className="mt-4">{randomBeer.name}</h3>
          <p className="text-muted">{randomBeer.tagline}</p>
          <p><strong>Attenuation level:</strong> {randomBeer.attenuation_level}</p>

          {/* Description wrapped in a div with styling for constrained width */}
          <div className="beer-description mt-3" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <p><strong>Description:</strong> {randomBeer.description}</p>
          </div>
          
          <p><strong>Created by:</strong> {randomBeer.contributed_by}</p>

          <button
            className="btn btn-primary mt-4"
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
