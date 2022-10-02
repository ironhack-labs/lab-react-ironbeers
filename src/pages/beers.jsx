import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Beer from "../components/Beer";
import "../styles/beer.css";

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
      <input
        className="search"
        type="text"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <div className="beer-list">
        {data.map((beer) => {
          return <Beer key={beer._id} beerInfo={beer} />;
        })}
      </div>
    </div>
  );
}

export default Beers;
