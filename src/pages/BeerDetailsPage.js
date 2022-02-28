import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {
  const [requestedBeer, setRequestedBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  const { beerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL + beerId);
        const requestedBeerData = response.data;
        setRequestedBeer(requestedBeerData);
        setLoading(false);
      } catch (err) {
        return (
          <div>
            <p>No beers found</p>
          </div>
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="d-inline-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: "700px" }}
    >
      <Header />
      {loading && (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}

      {!loading && (
        <>
          <img
            src={requestedBeer.image_url}
            alt="beer"
            height="20%"
            width="20%"
          />
          <h3>{requestedBeer.name}</h3>
          <p>{requestedBeer.tagline}</p>
          <p>Attenuation level: {requestedBeer.attenuation_level}</p>
          <p>Description: {requestedBeer.description}</p>
          <p>Created by: {requestedBeer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
