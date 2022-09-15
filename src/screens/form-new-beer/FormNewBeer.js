import React from "react";
import { useState } from "react";
import BeerForm from "../../components/beer-form/BeerForm";
import Navbar from "../../components/nav-bar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";

function FormNewBeer() {
  const navigate = useNavigate()
  const [beer, setBeer] = useState([])

  const handleAddBeer = (newBeer) => {
    setBeer([...beer, newBeer])
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {...newBeer})
    .then(navigate("/"))
    .catch((error) => console.log(error))
  } 

  return (
    <>
      <Navbar />
      <BeerForm onCreateBeer={handleAddBeer}/>
    </>
  );
}

export default FormNewBeer;
