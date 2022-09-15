import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/nav-bar/Navbar";
import DetailBeer from "../../components/detail-beer/DetailBeer";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => {
        console.log(res.data);
        setRandomBeer(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <DetailBeer {...randomBeer} />
    </>
  );
}

export default RandomBeer;
