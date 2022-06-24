import React, { useEffect, useState } from "react";

import "./ListBeerPage.css";

import Beer from "../components/BeerInList";
import axios from "axios";

const ListBeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="list-beer">
      {beers.map((beer) => {
        return <Beer key={beer._id} {...beer} />;
      })}
    </div>
  );
};

export default ListBeersPage;
