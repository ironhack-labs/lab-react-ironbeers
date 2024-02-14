import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



function BeerDetailsPage() {
  
  // const API
  const APIurl="https://ih-beers-api2.herokuapp.com"
  //const params
  const { beerId } = useParams();
    // const state
    const [beer, setBeer] = useState(null);
  // React Router hook for navigation. 
  const navigate = useNavigate();

  // request the API
  const getBeer = () => {
    axios.get(`${APIurl}/beers/${beerId}`)
    .then((response) => {
      setBeer(response.data);
    })
    .catch((e) => {console.log(e)});
  }

  // use effect on the response
  useEffect(()=> {
    getBeer()
  }, []);

  
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
