import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import beersJSON from "./../assets/beers.json";
import { useParams } from "react-router-dom";
import axios from "axios";


function BeerDetailsPage() {

const params = useParams()
  
  const [beer, setBeer] = useState(beersJSON[0]);
 
  const navigate = useNavigate();

  useEffect(()=>{
    getData()
  }, [])

  const getData= async()=>{
    try {
      const response= await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      setBeer(response.data)
    } catch (error) {
      console.log(error)
    }
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
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
