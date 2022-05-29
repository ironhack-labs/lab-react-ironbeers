import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

function BeerDetails() {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState(null);

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
  }, []);

  return (
    <div className="beerDetails">
      <NavBar />
      {beerDetails && (
        <div className="beerDetDiv">
          <div className="beerDetImgDiv">
            <img src={beerDetails.image_url} alt="something" />
          </div>
          <h1>{beerDetails.name}</h1>
          <div className="beerDetInnerInfoDiv">
            <h2>{beerDetails.tagline}</h2>
            <h2>{beerDetails.first_brewed}</h2>
            <h2>{beerDetails.atenuation_level}</h2>
          </div>
          <h3>{beerDetails.description}</h3>
          <p><b>Contributed by:</b> {beerDetails.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default BeerDetails;
