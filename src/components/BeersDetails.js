import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetails() {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState();
  const URL = "https://ih-beers-api2.herokuapp.com";

  useEffect(() => {
    axios
      .get(URL + `/beers/${beerId}`)
      .then((response) => {
        setBeerDetails(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [beerId]);

  return (
    <div>
      <NavBar />
      {beerDetails ? (
        <div>
          <img src={beerDetails.image_url} alt="" />
          <h1>{beerDetails.name}</h1>
          <p>{beerDetails.tagline}</p>
          <p>First brewed: {beerDetails.first_brewed}</p>
          <p>Attenuation level: {beerDetails.attenuation_level}</p>
          <p>{beerDetails.description}</p>
          <p>Created by: {beerDetails.contributed_by}</p>
        </div>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}

export default BeerDetails;
