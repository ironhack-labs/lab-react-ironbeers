import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const api_URL = "https://ih-beers-api2.herokuapp.com/beers"




function BeerDetailsPage() {
  const [beer, setBeer] = useState({});

  const { beerId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    loadBeerDetails()
  }, [])

  const loadBeerDetails = () => {
    axios
      .get(`${api_URL}/${beerId}`)
      .then(({ data }) => setBeer(data))
      .catch((error) => console.log(error))
  }




  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {beer && (
        <>
          <img
            src={beer.image_url}
            alt="Beer Image"
            height="300px"
            width="auto"
          />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          <hr />
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(`/beers/${beerId}/edit`);
            }}
          >
            Edit Beer
          </button>


        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
