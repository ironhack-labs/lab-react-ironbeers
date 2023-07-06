import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";
console.log(apiURL);

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  const getAllBeers = () => {
    axios

      .get(apiURL)
      .then((response) => {
        setAllBeers(response.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      <Header />
      <h1>All Beers Page</h1>
    </div>
  );
}

export default AllBeersPage;
