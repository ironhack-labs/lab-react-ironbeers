import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import BeerDetailCard from "../components/BeerDetailCard";

// const API_URL = "https://ih-beers-api2.herokuapp.com/beers ";

function BeerDetailPage() {

  const [ beerDetail, setBeerDetail ] = useState([]);
  const { beerId } = useParams();

  const getBeerDetail = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
      	const responseArray = response.data;
      	setBeerDetail(responseArray);
        console.log(beerDetail)
    	})
      .catch((error) => console.log(error));
  };

  useEffect(()=> {
    getBeerDetail();
  }, [] );

  return (
    <>
      <Header />
      <BeerDetailCard {...beerDetail} /> 
    </>
  )
}

export default BeerDetailPage;