import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data); // This will help you visualize the structure
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the beers!", error);
      });
  }, []);

  return (
    <div>
      {beers.map((beer) => (
        <div
          key={beer._id}
          style={{
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <Link
            to={`/beers/${beer._id}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
            }}
          >
            <img
              src={beer.image_url}
              alt={beer.name}
              style={{ width: "50px", marginRight: "20px" }}
            />
            <div>
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>
                <strong>Created by:</strong> {beer.contributed_by}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
