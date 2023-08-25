import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setBeer(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching API data (beer details): ", error);
      });
  }, []);

  return (
    <div>
      <h1>Beer Details Page</h1>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <h3>{beer.tagline}</h3>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
