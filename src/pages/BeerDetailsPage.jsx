import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  // 1. Initialize state for a single beer object
  const [beer, setBeer] = useState(null);
  
  // 2. Get the beer ID from the URL using useParams
  const { beerId } = useParams(); 
  
  const navigate = useNavigate();

  // 3. Fetch the specific beer data when the component mounts or beerId changes
  useEffect(() => {
    // 4. Make the GET request to the specific endpoint
    axios.get(`https://beers-api.edu.ironhack.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log("Error fetching beer details: ", error);
      });
  }, [beerId]); // Add beerId to dependency array to re-run if ID changes

  // Loading state
  if (!beer) return <p>Loading...</p>;

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
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

      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default BeerDetailsPage;