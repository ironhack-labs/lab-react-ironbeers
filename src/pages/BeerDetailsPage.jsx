import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../config";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  const navigate = useNavigate();

  const fetchOneBeer = async () => {
    try {
      const oneBeerResponse = await axios.get(URL + `/${beerId}`);
      setBeer(oneBeerResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOneBeer();
  }, []);

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {beer && (
        <>
          <img src={beer.image_url} alt="Beer Image" height="300px" width="auto" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}>
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
