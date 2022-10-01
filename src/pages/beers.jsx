import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import SingleBeer from "../components/SingleBeer";

function Beers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        console.log("Result: ", result.data);
        setData(result.data);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <div>All Beers</div>
      {data.map((beer) => {
        console.log("Beer: ", beer);
        return <SingleBeer beerInfo={beer} />;
      })}
    </div>
  );
}

export default Beers;
