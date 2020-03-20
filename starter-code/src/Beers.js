import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import useFetch from "./components/hooks/useFetch";
import Cards from "./components/UI/AllBeers";
import GetBeers from "../src/components/GetBeer";

const Beers = function() {
  const { data, loading } = useFetch(
    "https://ih-beers-api2.herokuapp.com/beers"
  );
  if (loading) {
    return <Cards>Cargando las de cervezas...</Cards>;
  }

  return (
    <Cards>
      <Navbar />
      <GetBeers />
    </Cards>
  );
};

export default Beers;
