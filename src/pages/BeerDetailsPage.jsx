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
    <div className="beerCardLarge">
      <img src={beerDetails.image_url}></img>
      <h3>{beerDetails.name}</h3>
      <h5>{beerDetails.tagline}</h5>
      <span className="firstBrewed">{beerDetails.first_brewed}</span>
      <span style={{ margin: "0 10px" }}> </span>
      <span className="attenuationLevel">{beerDetails.attenuation_level}</span>
      <p>{beerDetails.description}</p>
      <i>{beerDetails.contributed_by}</i>
    </div>
  );
}

export default BeerDetailsPage;
