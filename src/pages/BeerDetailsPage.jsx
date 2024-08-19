import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeer(response.data);
      } catch (error) {
        console.error("Error fetching beer details:", error);
      }
    };
    fetchBeer();
  }, [beerId]);

  if (!beer) return <div>Loading...</div>;

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} style={{ width: "200px" }} />
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <p>{beer.description}</p>
      <p>
        <strong>First Brewed:</strong> {beer.first_brewed}
      </p>
      <p>
        <strong>Brewer's Tips:</strong> {beer.brewers_tips}
      </p>
      <p>
        <strong>Attenuation Level:</strong> {beer.attenuation_level}
      </p>
      <p>
        <strong>Contributed By:</strong> {beer.contributed_by}
      </p>
    </div>
  );
}

export default BeerDetailsPage;
