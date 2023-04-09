import { useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerDetails() {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState(null);
  const url = "https://ih-beers-api2.herokuapp.com";

  useEffect(() => {
    axios
      .get(url + `/beers/${beerId}`)
      .then((response) => {
        console.log(response);
        setBeerDetails(response.data);
      })
      .catch((e) => {
        console.log("error getting beer details from API", e);
      });
  }, [beerId]);

  

  return (
    <div>
      <Header />
      {beerDetails ? (
        <div>
          <img src={beerDetails.image_url} alt="beer-img" />
          <h1>{beerDetails.name}</h1>
          <p>{beerDetails.tagline}</p>
          <p>First brewed: {beerDetails.first_brewed}</p>
          <p>Attenuation level: {beerDetails.attenuation_level}</p>
          <p>{beerDetails.description}</p>
          <p>Created by: {beerDetails.contributed_by}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

export default BeerDetails;