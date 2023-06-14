import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetail() {
  const [beer, setBeer] = useState(null);
  const { _id } = useParams();
  useEffect(() => {
    const getOneBeer = async () => {
      const { data } = await axios(
        `https://ih-beers-api2.herokuapp.com/beers/${_id}`
      );
      setBeer(data)
    };
    getOneBeer()
  });
if(!beer){return(<p>loading....</p>)}
  return <div className="single-beer">
    <img src={beer.image_url} alt={beer.name}/>
    <div>
      <div className="start-end">
          <h1>{beer.name}</h1>
          <p>{beer.attenuation_level}</p>
      </div>
      <div className="start-end">
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
      </div>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>

  </div>;
}

export default BeerDetail;
