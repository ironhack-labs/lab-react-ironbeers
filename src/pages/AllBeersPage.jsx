import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState(''); // State for the search query

  // Fetch beers when the page loads
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => console.error("Error fetching beers:", error));
  }, []);

  // Fetch beers based on search query
  useEffect(() => {
    if (query === "") {
      // If there's no query, return to displaying all beers
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          setBeers(response.data);
        })
        .catch((error) => console.error("Error fetching beers:", error));
      return;
    }

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => console.error("Error fetching beers:", error));
  }, [query]); // This effect runs when the query changes

  // Handle the change in the search input field
  const handleSearchChange = (e) => {
    setQuery(e.target.value); // Update the query state
  };


  return (
    <div className="all-beers-page">
      <h1>All Beers</h1>

      {/* Search input */}
      <div>
        <input
          type="text"
          placeholder="Search by beer name or tagline..."
          value={query}
          onChange={handleSearchChange} // Update query as the user types
        />
      </div>

      {/* Display the beers */}
      {beers.length > 0 ? (
        beers.map((beer) => (
          <div key={beer._id} className="beer-card">
            <img
              src={beer.image_url}
              alt={beer.name}
              className="beer-image"
            />
            <div className="beer-info">
              <h2>{beer.name}</h2>
              <p className="tagline">{beer.tagline}</p>
              <p>
                <strong>Created by:</strong> {beer.contributed_by}
              </p>
              <Link to={`/beers/${beer._id}`} className="details-link">
                More Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No beers found</p> // Display this message when no beers match the query
      )}
    </div>
  );
}

export default AllBeersPage;