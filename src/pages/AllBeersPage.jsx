import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
      setFilteredBeers(response.data); // Initially set filtered beers to all beers
    } catch (error) {
      console.error("Error fetching beers: ", error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      setFilteredBeers(response.data);
    } catch (error) {
      console.error("Error searching beers: ", error);
      setFilteredBeers([]); // Clear filtered beers on error
    }
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <div className="container">
        <div className="row">
          {filteredBeers.map((beer) => (
            <div className="col-md-4" key={beer._id}>
              <Link to={`/beers/${beer._id}`} className="text-decoration-none">
                <div className="card mb-4 shadow-sm">
                  <img
                    src={beer.image_url}
                    className="card-img-top"
                    alt={beer.name}
                    style={{ height: "200px", objectFit: "contain" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150";
                    }} // Fallback image
                  />
                  <div className="card-body">
                    <h5 className="card-title">{beer.name}</h5>
                    <p className="card-text">
                      <em>{beer.tagline}</em>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Created by: {beer.contributed_by}
                      </small>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllBeersPage;
