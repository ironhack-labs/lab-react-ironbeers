import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeersPage() {
  // Define state variables to store the random beer data and the loading status
  const [randomBeer, setRandomBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the 'navigate' function from the React Router DOM
  const navigate = useNavigate();

  // Use the useEffect hook to fetch the data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/random`);
        const randomBeerData = response.data;

        // Store the fetched data in the state variables and set the loading status to false
        setRandomBeer(randomBeerData);
        setLoading(false);
      } catch (err) {
        // Handle errors if any
        return <p>No beers found</p>;
      }
    };

    fetchData();
  }, []);

  // Render the component with the fetched data
  return (
    <div
      className="d-inline-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: "700px" }}
    >
      {/* Render the Header component */}
      <Header />
      <h2>Random Beer</h2>

      {/* Show a loading spinner if the data is being fetched */}
      {loading && (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}

      {/* Show the fetched data if it's available */}
      {!loading && (
        <div>
          <img src={randomBeer.image_url} alt="beer" height="20%" width="20%" />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Created by: {randomBeer.contributed_by}</p>

          {/* Add a button to navigate back to the previous page */}
          <button
            className="btn btn-primary"
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

export default RandomBeersPage;
