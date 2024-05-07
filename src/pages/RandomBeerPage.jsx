import { useState, useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiURL = "https://ih-beers-api2.herokuapp.com/beers"


function RandomBeersPage() {


  const [randomBeer, setRandomBeer] = useState({});

  const navigate = useNavigate();


  useEffect(() => {

    loadRandomBeer()
  }, [])


  const loadRandomBeer = () => {
    axios
      .get(`${apiURL}/random`)
      .then(response => {
        setRandomBeer(response.data)
      })
      .catch(err => console.log(err))
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
