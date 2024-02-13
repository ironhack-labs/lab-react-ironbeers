import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function BeerDetailsPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.

  const theUrl = "https://ih-beers-api2.herokuapp.com"

  const { beerId } = useParams();

  const [beer, setBeer] = useState(null);

  const getBeer = () => {
    axios
      .get(`${theUrl}/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data)
      })
      .catch((error) => {
        console.log("Could not get your beer");
      })
  }

  useEffect(() => {
    getBeer();
  }, []);


  const navigate = useNavigate();






  // Structure and the content of the page showing the beer details. You can leave this as it is:
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
}

export default BeerDetailsPage;
