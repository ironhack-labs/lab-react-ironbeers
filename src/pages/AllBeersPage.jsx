import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        setBeers(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching beers:", err);
        setError("Failed to fetch beers. Please try again later.");
        setLoading(false);
      }
    };

    fetchBeers();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>All Beers</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        {beers.map((beer) => (
          <div
            key={beer._id}
            style={{
              display: "flex",
              gap: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              alignItems: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Link to={`/beers/${beer._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={beer.image_url}
                alt={beer.name}
                style={{ maxWidth: "50px", maxHeight: "150px" }}
              />
            </Link>
            <div>
              <h2 style={{ margin: "0 0 10px" }}>
                <Link to={`/beers/${beer._id}`} style={{ textDecoration: "none", color: "inherit" }}>{beer.name}
                </Link>
              </h2>
              <p style={{ margin: "0 0 5px", color: "#555" }}>
                <em>{beer.tagline}</em>
              </p>
              <p style={{ margin: "0", fontSize: "0.9em", color: "#777" }}>
                <strong>Created by:</strong> {beer.contributed_by}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;
