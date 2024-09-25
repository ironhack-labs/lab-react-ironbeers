import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import beersJSON from "./../assets/beers.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


function BeerDetailsPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
 // const [beer, setBeer] = useState(beersJSON[0]);
  const [newBeer, setNewBeer] = useState(null)

  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();
const params = useParams()
//console.log(params)


  // TASKS:
  // 1. Get the beer ID from the URL, using the useParams hook.
  // 2. Set up an effect hook to make a request for the beer info from the Beers API.
  // 3. Use axios to make a HTTP request.
  // 4. Use the response data from the Beers API to update the state variable.
useEffect(()=> {
getData()
}, [])

const getData = async() => {

  try {
   const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/beers/${params.beerId}`)
   console.log(response)
   setNewBeer(response.data)
  }catch (error) {
 console.log(error)
  }
}

if (newBeer === null) {
  return (<h3>...</h3>)
}

  // Structure and the content of the page showing the beer details. You can leave this as it is:
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {newBeer && (
        <>
          <img
            src={newBeer.image_url}
            alt="Beer Image"
            height="300px"
            width="auto"
          />
          <h3>{newBeer.name}</h3>
          <p>{newBeer.tagline}</p>
          <p>Attenuation level: {newBeer.attenuation_level}</p>
          <p>Description: {newBeer.description}</p>
          <p>Created by: {newBeer.contributed_by}</p>

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
