import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetails() {
  const [beerDetails, setBeerDetails] = useState(null);

  const { beerId } = useParams();

  const getBeerDetails = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeerDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeerDetails();
  }, [beerId]);

  return (
    <div className="beer-card">
      {beerDetails && (
        <>
          <img src={beerDetails.image_url} alt="beer details" />
          <h2>{beerDetails.name}</h2>
          <h3>{beerDetails.attenuation_level}</h3>
          <h4>{beerDetails.tagline}</h4>
          <h6>{beerDetails.first_brewed}</h6>
          <p>{beerDetails.description}</p>
          <p>{beerDetails.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default BeerDetails;
