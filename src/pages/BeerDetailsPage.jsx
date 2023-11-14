import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response);
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      }, [beerId]);

    return (
      <div>
        <h1>{beer.name}</h1>
        <img src={beer.image_url} alt={beer.name} />
        <p>{beer.tagline}</p>
        <p>first brewed: {beer.first_brewed}</p>
        <p>attenuation level: {beer.attenuation_level}</p>
        <p>description: {beer.description}</p>
        <p>contribution: {beer.contributed_by}</p>
      </div>
    );
  });
}

export default BeerDetailsPage;
