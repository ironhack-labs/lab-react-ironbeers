import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import BeerDetailCard from "../components/BeerDetailCard";
import axios from "axios";

function BeerDetailPage() {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchBeerDetails();
  }, [id]);

  const fetchBeerDetails = async () => {
    try {
      const res = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
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

export default BeerDetailPage;
