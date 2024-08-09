import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log(response.data); 
        setBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching random beer:", error);
      });
  }, []); 

  if (!beer) {
    return <div>Loading random beer...</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img src={beer.image_url} alt={beer.name} style={{ height: "200px" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>{beer.name}</h1>
        <span style={{ fontSize: "2rem", color: "#ccc" }}>
          {beer.attenuation_level}
        </span>
      </div>
      <h3 style={{ color: "#888" }}>{beer.tagline}</h3>
      <p style={{ fontWeight: "bold" }}>{beer.first_brewed}</p>
      <p>{beer.description}</p>
      <p style={{ fontWeight: "bold", color: "#555" }}>
        {beer.contributed_by.split("<")[0]}
      </p>
    </div>
  );
}

export default RandomBeerPage;
