import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();
  console.log(beerId);

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  console.log(`current beer is: ` + beer);
  console.log(beer);

  return (
    <div>
      <h1>{beer.name}</h1>
      <p>{beer.description}</p>
    </div>
  );
}

export default BeerDetailsPage;
