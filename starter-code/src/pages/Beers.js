import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import useFetch from "../components/hooks/useFetch";
import ContainerPage from "../components/UI/ContainerPage";
import AllBeers from "./AllBeers";

const Beers = function() {
  return (
    <ContainerPage>
      <Navbar />
      <AllBeers />
    </ContainerPage>
  );
};

export default Beers;
