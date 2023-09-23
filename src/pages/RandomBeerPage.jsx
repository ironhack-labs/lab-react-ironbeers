import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import BeerDetailCard from "../components/BeerDetailCard";


function RandomBeerPage() {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchBeerDetails();
  }, [id]);

  const fetchBeerDetails = async () => {
    try {
      const res = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      const data = res.data;
      setBeer(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <BeerDetailCard beer={beer} />
    </>
  );
}

export default RandomBeerPage;
