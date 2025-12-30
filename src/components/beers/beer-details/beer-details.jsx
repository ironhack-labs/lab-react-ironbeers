
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as beersService from './../../../services/beers-service';

function BeerDetails({ id }) {

  const [beer, setBeer] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const beerId = async (id) => {
      try {
        const beer = await beersService.getBeerId(id);
        setBeer(beer);
      } catch (error) {
        console.error('Error en details ', error.message)
      }
    };
    
    beerId(id);
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

export default BeerDetails;
