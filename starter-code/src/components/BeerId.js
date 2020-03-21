import React, { useEffect, useState } from "react";
import { beerDetails } from "../lib/BeersApi";
import BeerInfo from "./BeersInfo";
import Navbar from "./Navbar";

const BeerId = props => {
  const id = props.match.params.id;
  const [beer, setBeer] = useState({});

  useEffect(()=>{
    beerDetails(id).then(beer => setBeer(beer));
  },[id]);

  if (!beer) return <p>Loading...</p>;

  return (
    <>
    <Navbar/>
  <BeerInfo beer={beer}></BeerInfo>
  </>
  )
};

export default BeerId;
