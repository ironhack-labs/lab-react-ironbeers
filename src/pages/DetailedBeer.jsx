import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { SiHomebrew } from "react-icons/si";

function DetailedBeer() {
  const [beerDetails, setBeerDetails] = useState([]);
  const { beerId } = useParams();
  console.log(beerId);

  const getBeerDetails = async () => {
    const { data } = await axios(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    );
    setBeerDetails([data]);
    console.log("data", data);
  };
  useEffect(() => {
    getBeerDetails();
  }, [beerId]);

  if (!beerDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <header className="header">
        <Link to={"/"}>
          <SiHomebrew className="home-icon" />
        </Link>
      </header>
      <h1>Beer Details</h1>
      {beerDetails.map((detailedBeer) => {
        return (
          <div key={detailedBeer._id} className="beers-details">
            <img
              src={detailedBeer.image_url}
              alt={detailedBeer.name}
              className="all-beer-img"
            />

            <h2>{detailedBeer.name}</h2>
            <h4>{detailedBeer.tagline}</h4>
            <h4> First Brewed:{detailedBeer.first_brewed}</h4>
            <h5> Attenuation:{detailedBeer.attenuation_level}</h5>
            <h5> Description:{detailedBeer.description}</h5>

            <h4> Contributed by:{detailedBeer.contributed_by}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default DetailedBeer;
