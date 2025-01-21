import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams(); 
  const [beer, setBeer] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeer(response.data); 
        setLoading(false); 
      } catch (err) {
        console.error("Error fetching beer details:", err);
        setError("Failed to fetch beer details. Please try again later.");
        setLoading(false);
      }
    };

    fetchBeerDetails();
  }, [beerId]); 

  //loading state
  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;
  }

  //error state
  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  //beer details
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img
        src={beer.image_url}
        alt={beer.name}
        style={{ maxWidth: "100px", marginBottom: "20px" }}
      />
      <h1>{beer.name}</h1>
      <p style={{ fontStyle: "italic", color: "#555" }}>{beer.tagline}</p>
      <p>
        <strong>Attenuation level:</strong> {beer.attenuation_level}
      </p>
      <p style={{ maxWidth: "600px", margin: "20px auto", textAlign: "justify" }}>
        <strong>Description:</strong> {beer.description}
      </p>
      <p>
        <strong>Created by:</strong> {beer.contributed_by}
      </p>
      <button
        onClick={() => navigate(-1)} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back
      </button>
    </div>
  );
}

export default BeerDetailsPage;
