import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const api_URL = "https://ih-beers-api2.herokuapp.com"

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState([]);

  // const { beerId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    loadBeerDetails()
  }, [])

  const loadBeerDetails = () => {
    axios
      .get(`${api_URL}/beers/random`)
      .then(({ data }) => setRandomBeer(data))
      .catch((error) => console.log(error))
  }




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
