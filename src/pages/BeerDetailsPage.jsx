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
      console.log(response.data);
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
      {beer && (
        <>
          <img src={beer.image_url} alt="" width="50" />
          <h1>{beer.name}</h1>
          <p>
            <em>{beer.tagline}</em>
          </p>
          <p>{beer.description}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.contributed_by}</p>
        </>
      )}
      {/*       <h1>{beer.name}</h1>
      <p>{beer.description}</p> */}
    </div>
  );
}

export default BeerDetailsPage;
