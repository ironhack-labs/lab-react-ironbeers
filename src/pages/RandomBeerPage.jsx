import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState([]);

  const navigate = useNavigate();

  const getBeersData = async () => {
    const res = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers/random"
    );
    setRandomBeer(res.data);
    if (res.status !== 200) {
      throw new Error("Request error");
    }
  };

  useEffect(() => {
    getBeersData();
  }, []);

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Random Beer</h2>

      {randomBeer && (
        <>
          <img
            src={randomBeer.image_url}
            alt="beer"
            height="300px"
            width="auto"
          />
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
        </>
      )}
    </div>
  );
}

export default RandomBeersPage;
