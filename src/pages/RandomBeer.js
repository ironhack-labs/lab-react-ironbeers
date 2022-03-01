import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/random`);
        const randomBeerData = response.data;

        setRandomBeer(randomBeerData);
        setLoading(false);
      } catch (err) {
        return <p>No beers found</p>;
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="d-inline-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: "700px" }}
    >
      <Navbar />
      <h2>Random Beer</h2>

      {loading && (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading"
        />
      )}

      {!loading && (
        <div>
          <img src={randomBeer.image_url} alt="beer" height="20%" width="20%" />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Created by: {randomBeer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;