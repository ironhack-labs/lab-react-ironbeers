import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

import BeerCard from "../components/BeerCard";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers ";

function AllBeersPage() {

  const [ allBeersArray, setAllBeersArray ] = useState([]);

  const getAllBeers = () => {
    axios
      .get(API_URL)
      .then((response) => {
      	const responseArray = response.data;
      	setAllBeersArray(responseArray);
    	})
      .catch((error) => console.log(error));
  };

  useEffect(()=> {
    getAllBeers();
  }, [] );

  return (
    <>
      <Header />
      <div className="all-beers-section">
        { allBeersArray && allBeersArray.map((beer) => <BeerCard {...beer} /> )} 
      </div>
    </>
  )
}

export default AllBeersPage;