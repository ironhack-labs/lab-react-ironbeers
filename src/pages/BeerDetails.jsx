import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function BeerDetails() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    async function getBeer() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setBeer(response.data);
    }
    getBeer();
  }, [id]);

  if (!beer) return <div>No beer today 😢</div>;

  return (
    <div>
      <Navbar />
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt={beer.name} />
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetails;
