import React from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
  //Setting the states
  const [beer, setBeer] = useState(""); //useState for the beer details
  /* const [isLoading, setIsLoading] = useState(true); */

  //get the beer params on a variable
  const { beerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //Using the effect to fetch the API data with axios in order to display the content

    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/${beerId}`); //GET method to get a specific beer info from the API
      const oneBeerData = response.data;

      setBeer(oneBeerData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h2>Beer details</h2>
      <img src={beer.image_url} alt="" height="250px" />

      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
