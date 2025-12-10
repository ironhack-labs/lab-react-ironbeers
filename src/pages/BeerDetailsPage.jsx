import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null); 

  const { beerId } = useParams(); 

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(
          `https://beers-api.edu.ironhack.com/beers/${beerId}`
        );
        setBeer(response.data); 
        
      } catch (error) {
        console.error("Error fetching beer details:", error);
        
      }
    };

    fetchBeer();
  }, [beerId]);

  if (!beer) {
    return <p>Loading beer details...</p>; 
  }

  return (
    <div className="beer-details"> 
      <h1>{beer.name}</h1>
      
      <div className="details-container">
        <img src={beer.image_url} alt={beer.name} style={{ height: "300px" }} />
        
        <div className="info">
          <h2>{beer.tagline}</h2>
          <p><strong>First brewed:</strong> {beer.first_brewed}</p>
          <p><strong>Attenuation level:</strong> {beer.attenuation_level}</p>
          <p><strong>Description:</strong> {beer.description}</p>
          <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
         
        </div>
      </div>
    </div>
  );
}

export default BeerDetailsPage;