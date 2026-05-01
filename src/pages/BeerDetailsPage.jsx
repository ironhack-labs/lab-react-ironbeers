import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://beers-api.edu.ironhack.com/beers/${beerId}`
        );
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [beerId]);

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {!beer ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <img src={beer.image_url} alt="Beer Image" height="300px" width="auto" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;