import axios from "axios";
import React, { useEffect, useState } from "react";

function Beers() {
  const [beers, setBeer] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        //console.log(response.data);
        setBeer(response.data);
      })
      .catch((e) => console.log("error fetchin array of beers", e));
  }, []);

  return (
    <div>
      {beers.map((beer) => {
        return (
          <div className="beerArray">
            <img src={beer.image_url} alt={beer.name} />
            <h3>Name: {beer.name}</h3>
            <h4>Tagline: {beer.tagline}</h4>
            <h5>Contributed by: {beer.contributed_by}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
