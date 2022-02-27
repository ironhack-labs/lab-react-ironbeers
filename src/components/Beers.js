import React, { useEffect } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Beers() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setAllBeers(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
      {allBeers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt="beer" />
          <h4>{beer.name}</h4>
          <p>{beer.tagline}</p>
          <p>Created by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>Details</Link>
        </div>
      ))}
    </>
  );
}
