import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beerDetails, setBeerDetails] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeerDetails(response.data);
        console.log("data", response.data);
      })
      .catch((error) => {
        console.log("Something went wrong with the beer's details :(");
        console.log(error);
      });
  }, []);

  return (
    <div>
      <img src={beerDetails.image_url} width="150px" height="auto" />
      <h1>{beerDetails.name}</h1>
      <h2>{beerDetails.tagline}</h2>
      <h2>{beerDetails.first_brewed}</h2>
      <h2>{beerDetails.attenuation_level}</h2>
      <p>{beerDetails.description}</p>
      <h4>{beerDetails.contributed_by}</h4>
    </div>
  );
}

export default BeerDetailsPage;
