import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {
  // Declare state variables for the requested beer data and loading state
  const [requestedBeer, setRequestedBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the beerId parameter from the URL using the useParams hook
  const { beerId } = useParams();

  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Fetch the beer data from the API when the component mounts using the useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL + beerId);
        const requestedBeerData = response.data;
        // Update the state with the requested beer data and set loading to false
        setRequestedBeer(requestedBeerData);
        setLoading(false);
      } catch (err) {
        // If there is an error, return a message indicating that no beers were found
        return (
          <div>
            <p>No beers found</p>
          </div>
        );
      }
    };

    fetchData();
  }, [beerId]);

  // Render the component
  return (
    <div
      className="d-inline-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: "700px" }}
    >
      <Header />
      {loading && (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}

      {!loading && (
        <>
          {/* Display the requested beer data */}
          <img
            src={requestedBeer.image_url}
            alt="beer"
            height="20%"
            width="20%"
          />
          <h3>{requestedBeer.name}</h3>
          <p>{requestedBeer.tagline}</p>
          <p>Attenuation level: {requestedBeer.attenuation_level}</p>
          <p>Description: {requestedBeer.description}</p>
          <p>Created by: {requestedBeer.contributed_by}</p>

          {/* Add a Back button to navigate back to the previous page */}
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

