import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const beersAPI_URL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {
  const [beerDetails, setBeerDetails] = useState(null);

  const { beerId } = useParams();

  const getBeer = () => {
    axios
      .get(beersAPI_URL + beerId)
      .then((response) => {
        setBeerDetails(response.data)
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    getBeer();
  }, [])


console.log(beerDetails)

  return (
    <div className="BeerDetailsPage">
      {beerDetails && (
        <>
          <img src={beerDetails.image_url} />
          <div className="OneBeer">
            <h1>{beerDetails.name}</h1>
            <h2>{beerDetails.tagline}</h2>
            <p>First brewed: {beerDetails.first_brewed}</p>
            <p>Attenuation level: {beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <p>Created by: {beerDetails.contributed_by}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
