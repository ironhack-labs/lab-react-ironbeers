import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Beer from "../components/Beer";

function Beers() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((result) => setData(result.data))
      .catch((err) => {
        console.log("ERROR ON QUERY SEARCH: ", err);
      });
  }, [search]);

  return (
    <div>
      <Navigation />
      <h2>SEARCH</h2>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      <hr />
      <div>All Beers</div>
      {data.map((beer) => {
        return <Beer key={beer._id} beerInfo={beer} />;
      })}
    </div>
  );
}

export default Beers;
