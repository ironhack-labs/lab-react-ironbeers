import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import SingleBeer from '../components/SingleBeer'

import "./SingleBeerPage.css";

const SingleBeerPage = () => {
  const [beer, setBeer] = useState({});

  const params = useParams();

  console.log("params.id", params.id);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        console.log("singlebeer", response.data);
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SingleBeer {...beer}/>
  );
};

export default SingleBeerPage;
