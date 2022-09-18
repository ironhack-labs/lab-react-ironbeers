import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavBar, BeerCard } from "../../../components";

function BeerList() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        {beers
          ? beers.map((beer) => <BeerCard key={beer._id} {...beer} />)
          : "Loading..."}
      </div>
    </div>
  );
}

export default BeerList;
