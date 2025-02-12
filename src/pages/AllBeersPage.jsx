import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";

function AllBeersPage() {
  // Initializing state variables
  const [beers, setBeers] = useState([]);
  const [error, setError] = useState(null);  // Error state for handling errors


  const API_URL = "https://ih-beers-api2.herokuapp.com/beers";
  useEffect(() => {
    // Making GET request to fetch beers from the API
    axios
      .get(API_URL)
      .then((response) => {
        console.log("API Response:", response.data); // Log the response data to verify it's an array
        setBeers(response.data)
      })
      .catch((error) => {
        setError("Error fetching beer data. Please try again later.");
        console.error("Error fetching beers data:", error); // Log error for debugging
      });
  }, []);

  return (
    <>
      <Search />

      {/* Display error message if there was an issue */}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {/* Render beers array if available */}
        {beers.length > 0 ? (
          beers.map((beer) => (
            <div key={beer._id}>
              <Link to={"/beers/" + beer._id}>
                <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                  <div className="card-body">
                    <img
                      src={beer.image_url}
                      style={{ height: "6rem" }}
                      alt={"image of " + beer.name}
                    />
                    <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">
                      <em>{beer.tagline}</em>
                    </h6>
                    <p className="card-text">
                      Created by: {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div>No beers found.</div> 
        )}
      </div>
    </>
  );
}

export default AllBeersPage;
