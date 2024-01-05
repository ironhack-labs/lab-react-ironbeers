import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import "../index.css"

function BeerDetailsPage(props) {
  const [beer, setBeer] = useState("");
  const { beerId } = useParams();

  useEffect(() => {
    {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
          setBeer(response.data);
        })
        .catch((error) => error);
    }
  }, []);

  return (
    <>
      <img src={beer.image_url} alt="can't load picture"/>
      <h1>{beer.name}</h1>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.description}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.contributed_by}</p>
      <p>{beer.brewers_tips}</p>
    </>
  );
}

export default BeerDetailsPage;
