import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all beers on page load
  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    try {
      const response = await axios.get(
        "https://beers-api.edu.ironhack.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.error("Error fetching beers:", error);
    } finally {
      setLoading(false);
    }
  };

  // Bonus Iteration 5: search beers by query
  const handleSearch = async (query) => {
    if (query.trim() === "") {
      fetchBeers(); // reset if empty search
      return;
    }
    try {
      const response = await axios.get(
        `https://beers-api.edu.ironhack.com/beers/search?q=${query}`
      );
      setBeers(response.data);
    } catch (error) {
      console.error("Error searching beers:", error);
    }
  };

  if (loading) return <p>Loading beers...</p>;

  return (
    <>
      <Search onSearch={handleSearch} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers.map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <div
                className="card m-2 p-2 text-center"
                style={{ width: "24rem", height: "18rem" }}
              >
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
                  <p className="card-text">Created by: {beer.contributed_by}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllBeersPage;
