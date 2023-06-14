import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SiHomebrew } from "react-icons/si";

function DetailedBeer() {
  const [beerDetails, setBeerDetails] = useState([]);

  useEffect(() => {
    const beerDetails = async () => {
      const { data } = await axios(
        "https://ih-beers-api2.herokuapp.com/beers "
      );
      setBeerDetails(data);
      console.log("data", data);
    };
    beerDetails();
    console.log("beers-detail", beerDetails);
  }, []);
  if (!beerDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <header className="header">
        <Link to={"/"}>
          <SiHomebrew className="home-icon" />
        </Link>{" "}
      </header>
      <h1>Beers's Details</h1>
      {beerDetails.map((beerDetails) => {
        return (
          <div key={beerDetails._id} className="beers-details">
            <img
              src={beerDetails.image_url}
              alt="beer-details"
              className="all-beer-img"
            />
            <h2>{beerDetails.name}</h2>
            <h4>{beerDetails.tagline}</h4>
            <h4>{beerDetails.first_brewed}</h4>
            <h5>{beerDetails.attenuation_level}</h5>
            <h5>{beerDetails.description}</h5>

            <h4>{beerDetails.contributed_by}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default DetailedBeer;
