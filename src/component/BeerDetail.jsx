import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetail() {
  const [beer, setBeer] = useState(null);
  const { _id } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      const { data } = await axios(
        `https://ih-beers-api2.herokuapp.com/beers/${_id}`
      );
      setBeer(data);
    };
    getDetails();
  });
  if (!beer) {
    return <p>Loading.. It can take a few seconds please 
        be patient 
    </p>
  }
  return (
    <div>
      <div>
        <img src={beer.image_url} alt="beer" />
      </div>
      <div>
        <h2>{beer.name}</h2>
        <p>{beer.attenuation_level}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}
export default BeerDetail;
