import React, { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState(null);
  useEffect(() => {    
    const getOneBeer = async () => {
      const { data } = await axios(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setBeer(data)
    };
    getOneBeer()
  },[]);
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

export default RandomBeer