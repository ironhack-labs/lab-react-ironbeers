import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/nav-bar/Navbar";
import axios from "axios";
import BeerCard from "../../components/beer-card/BeerCard";

function BeerList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        console.log(res.data)
        setBeers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <ul className="list-group">
        {beers.map((beer) => (
          <BeerCard key={beer._id} {...beer} url={`/beers/${beer._id}`}
          />
        ))}
      </ul>
    </>
  );
}

export default BeerList;
