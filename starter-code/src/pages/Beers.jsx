import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "../components/BeerCard";

const Beers = () => {
  const [beers, setBeers] = useState(false);

  const getBeers = async () => {
    const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
    const { data } = res;
    console.log("DATA", data[0].name);
    return data;
  };

  useEffect(() => {
    getBeers().then(data => setBeers(data));
  }, []);
  console.log("BEERS", beers);

  return <div>{beers && beers.map(beer => <BeerCard key={beer._id} {...beer} />)}</div>;
};

export default Beers;
