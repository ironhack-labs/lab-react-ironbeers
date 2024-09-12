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
    <div className="beerCard">
      <img src={beer.image_url} width="100vw" height="auto" alt="can't load picture"/>
      <div className="beerInfo">
      <h1>{beer.name}</h1>
      <p>"{beer.tagline}"</p>
      <p className="description">{beer.description}</p>
      <p>First brewed: {beer.first_brewed}</p>
      <p>Attenuation level: {beer.attenuation_level}</p>
      <p>Contributed by: {beer.contributed_by}</p>
      <p>Tips: {beer.brewers_tips}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
