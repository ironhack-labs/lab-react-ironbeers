import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavBar, BeerDetail } from "../../../components";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((res) => {
      setBeer(res.data)
    })
    .catch(err => {console.log(err)});
  }, []);

  return (
    <div>
      <NavBar />
      {beer ? <BeerDetail {...beer} /> : "Loading..."}
    </div>
  )
}

export default RandomBeer;