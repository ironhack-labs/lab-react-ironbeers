import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./Header";

function RandomBeer() {
  const [beerDetails, setBeerDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/beers/random`)
      .then((response) => {
        console.log(response.data);
        setBeerDetails(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Header />
      <h1>Beer Details:</h1>
      <p>
        <img id="images" src={beerDetails.image_url} alt={beerDetails.image} />
      </p>
      <h3>{beerDetails.name}</h3>
      {beerDetails.tagline} <br />
      <p>{beerDetails.description}</p>
      <p>{beerDetails.attenuation_level}</p>
      <p>{beerDetails.first_brewed}</p>
      <p>{beerDetails.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
