// BeerDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

function BeerDetails() {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

  useEffect(() => {
    fetchBeerDetails();
  }, [beerId]);

  const fetchBeerDetails = () => {
    setLoading(true);
    axios
      .get(apiURL)
      .then((response) => {
        console.log(response.data);
        setBeerDetails(response.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const handleActionButton = () => {
    if (location.pathname === "/beers/random") {
      fetchBeerDetails();
    }
    if (location.pathname === "/beers/:beerId") {
      
    } 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading beer details.</div>;
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ width: "100vw", height: "100vh" }}>
      <div className="row d-flex flex-row align-items-center">
        <div className="col">
          <img src={beerDetails["image_url"]} style={{ width: "300px", height: "600px", objectFit: "contain" }} alt="Beer" />
        </div>
        <div className="col">
          <h1 className="mb-3" style={{ marginTop: "3rem", fontSize: "90px" }}>
            {beerDetails.name}{" "}
          </h1>
          <h2 className="mb-5">{beerDetails.tagline}</h2>
          <h5 className="mb-4">
            {beerDetails.first_brewed} <span className="">first brewed</span>
          </h5>
          <p style={{ marginTop: "3rem", fontSize: "22px" }}>{beerDetails.description}</p>
          <Button variant="primary" className="w-50 mx-auto mt-5" onClick={handleFetchNewBeer}>
            <Link to="/beers" className="ava-links">
              Back to all beers
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BeerDetails;
