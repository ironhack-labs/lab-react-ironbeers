import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [ beerDetails, setBeerDetails ] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeerDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [beerId]);
  if (!beerDetails) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <img
        src={beerDetails.image_url}
        alt={beerDetails.name}
        style={{ maxWidth: "100px", marginBottom: "10px" }}
      />
      <h2>{beerDetails.name}</h2>
      <p>{beerDetails.tagline}</p>
      <p>First Brewed: {beerDetails.first_brewed}</p>
      <p>Attenuation Level: {beerDetails.attenuation_level}</p>
      <p>Description: {beerDetails.description}</p>
      <p>Contributed by: {beerDetails.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
