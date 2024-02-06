import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import beersJSON from "./../assets/beers.json";

const BeerDetailsPage = () => {
  const [beer, setBeer] = useState(beersJSON[0]);
  const { beerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (beerId) {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
          setBeer(response.data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, [beerId]);
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
        </>
      )}
    </div>
  );
};

export default BeerDetailsPage;
