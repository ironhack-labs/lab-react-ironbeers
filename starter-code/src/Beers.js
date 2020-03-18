import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import useFetch from "./components/hooks/useFetch";
import DataBeers from "./DataBeers";

const Beers = function() {
  const { data, loading } = useFetch(
    "https://ih-beers-api2.herokuapp.com/beers"
  );
  if (loading) {
    return <div>Cargando las de cervezas...</div>;
  }

  return (
    <>
      <Navbar />
      <DataBeers
        name={data[0].name}
        tagline={data[0].tagline}
        description={data[0].description}
      />
    </>
  );
};

export default Beers;
