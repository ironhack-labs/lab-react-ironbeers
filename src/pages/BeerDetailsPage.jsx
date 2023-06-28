import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  const [beerDetails, setBeerDetails] = useState(null);

  let { beerId } = useParams();

  useEffect(
    function () {
      axios
        .get(` https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(function (response) {
          setBeerDetails(response.data);
          console.log(response.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    [beerId]
  );

  if (!beerDetails) return "loading";

  return (
    <div>
      <img src={beerDetails.image_url}></img>
      <h3>{beerDetails.name}</h3>
      <h4>{beerDetails.tagline}</h4>
      <div>{beerDetails.first_brewed}</div>
      <div>{beerDetails.attenuation_level}</div>
      <p>{beerDetails.description}</p>
      <i>{beerDetails.contributed_by}</i>
    </div>
  );
}

export default BeerDetailsPage;
