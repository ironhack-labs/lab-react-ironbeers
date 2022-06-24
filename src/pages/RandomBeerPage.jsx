import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleBeer from '../components/SingleBeer'

const RandomBeerPage = () => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log("singlebeer", response.data);
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <SingleBeer {...beer}/>
    </>
  );
};

export default RandomBeerPage;
