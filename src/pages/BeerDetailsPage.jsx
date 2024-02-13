import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


const base_API_url = "https://ih-beers-api2.herokuapp.com/"

function BeerDetailsPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const [beer, setBeer] = useState([]);

  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();



  // TASKS:
  // 1. Get the beer ID from the URL, using the useParams hook.

  const { beerId } = useParams()
  // 2. Set 8up an effect hook to make a request for the beer info from the Beers API.
  useEffect(() => loadBeersDetails(), [])
  const loadBeersDetails = () => {
    // 3. Use axios to make a HTTP request.
    axios
      .get(`${base_API_url}beers/${beerId}`)
      .then(({ data }) => setBeer(data))
      // 4. Use the response data from the Beers API to update the state variable.
      .catch((err) => console.log(err))
  }





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
