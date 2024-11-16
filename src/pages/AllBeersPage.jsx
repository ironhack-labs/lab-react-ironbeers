import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Search from "../components/Search";
import axios from 'axios';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null); // Timeout to manage typing delay

  // Function to fetch beers based on the query
  const fetchBeers = async (query) => {
    try {
      setLoading(true);
      let url = `https://ih-beers-api2.herokuapp.com/beers`;

      // If there's a search query, modify the URL for searching
      if (query) {
        url = `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`;
      }

      const response = await axios.get(url);
      setBeers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching beers:', error);
      setError('Failed to fetch beers details');
      setLoading(false);
    }
  };

  // Effect to fetch all beers on initial mount
  useEffect(() => {
    fetchBeers(""); // Fetch all beers initially
  }, []);

  // Handler for search input changes
  const handleSearch = (event) => {
    const query = event.target.value;

    // Clear the existing timeout to prevent excessive API calls while typing
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a new timeout to trigger the API call after a longer delay
    const newTimeout = setTimeout(() => {
      setSearchQuery(query);
    }, 1000); // Increased delay to 1000ms to wait for user to finish typing comfortably

    setTypingTimeout(newTimeout);
  };

  // Effect to fetch beers when search query changes
  useEffect(() => {
    fetchBeers(searchQuery);
  }, [searchQuery]);

  // Render loading message if data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if an error occurred during the fetch
  if (error) {
    return <div>{error}</div>;
  }

  // Render list of beers stacked vertically in the center
  return (
    <>
      <Search handleSearch={handleSearch} />

      <div className="beer-list d-flex flex-column align-items-center p-4">
        {beers.length > 0 ? (
          beers.map((Beer, i) => {
            return (
              <div key={i} className="beer-card mb-4" style={{ width: "500px" }}>
                <Link to={"/beers/" + Beer._id} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card p-3 text-center">
                    <img
                      src={Beer.image_url}
                      style={{ height: "150px", margin: "0 auto" }}
                      alt={"Image of " + Beer.name}
                    />
                    <div className="beer-info mt-3">
                      <h5 className="card-title">{Beer.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        <em>{Beer.tagline}</em>
                      </h6>
                      <p className="card-text">
                        Created by: {Beer.contributed_by}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p>No beers found.</p>
        )}
      </div>
    </>
  );
}

export default AllBeersPage;
